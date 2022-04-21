import dotenv from "dotenv";
import users from "./data/users";
import products from "./data/products";
import User from "./models/user";
import Product from "./models/products";
import Order from "./models/orders";
import connectDB from "./config/db";

dotenv.config();

connectDB();

function injectData(): void {
  try {
    Order.deleteMany();
    Product.deleteMany();
    User.deleteMany();

    User.insertMany(users);
    const adminUser = users.find((user) => user.isAdmin === true);
    const dummyProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    Product.insertMany(dummyProducts);

    console.log("Data seeding complete!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

function deleteData(): void {
  try {
    Order.deleteMany();
    Product.deleteMany();
    User.deleteMany();

    console.log("Data removal complete!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (process.argv[2] === "-d") {
  deleteData();
} else {
  injectData();
}
