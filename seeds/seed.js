// Import modules for database connection and models
const sequelize = require("../config/connection"); // Database connection
const { User } = require("../models"); // Importing the User model

//JSON data that will be seeded into the User table
const userData = require("./userData.json");

// Seeds the database with initial data
const seedDatabase = async () => {
  // Sync all models with the database, force: true drops the tables first if they exist
  await sequelize.sync({ force: true });
  console.log("Sequelize synced"); // Log that the database sync was successful

  // Bulk create users from the userData array, using individualHooks to ensure password hashing works
  await User.bulkCreate(userData, {
    individualHooks: true, // Ensures that beforeCreate and beforeUpdate hooks are run
    returning: true, // Returns all newly created user instances
  });
  console.log("Users created"); // Log that users have been successfully created

  // Exit the process after seeding is complete
  process.exit(0);
};

// Execute the seedDatabase function
seedDatabase();
