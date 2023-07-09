const app = require("./app");
const mongoose = require("mongoose");

app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3001");
});

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
