const RoleModel = require("../Models/Role");
const UserModel = require("../Models/User");
const connectDb = require("./db");
const bcrypt = require("bcryptjs");
const roles = ['client', 'livreur', 'manager'];
const defaultUser = {
    name : process.env.DEFAULT_NAME,
    email : process.env.DEFAULT_EMAIL,
    password : process.env.DEFAULT_PASSWORD,
    role: "manager"
}

async function initDb() {
  await connectDb();
  await createDefaultRoles();
  await createDefaultUser();
}

async function createDefaultRoles() {
  // check if role collection is empty
  RoleModel.countDocuments({}, (err, count) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    if (count === 0) {
      // insert roles
      roles.forEach(async (role) => {
        const newRole = new RoleModel({ role });
        await newRole.save();
      });
    }
  });
}

async function createDefaultUser() {
  // create and assign a role to default user if not exists
  UserModel.findOne({ email: defaultUser.email }, async (err, user) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      defaultUser.password = await bcrypt.hash(defaultUser.password, salt);
      const newUser = new UserModel(defaultUser);
      const userRole = await RoleModel.findOne({
        role: defaultUser.role,
      });
      newUser.roles = [userRole._id];
      await newUser.save();
    }
  });
}

module.exports = initDb;