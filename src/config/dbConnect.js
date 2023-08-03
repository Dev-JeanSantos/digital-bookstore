import mongoose from "mongoose";

mongoose.connect("mongodb+srv://devjs:angela2008@node-js.tbubmhu.mongodb.net/devjs");
let db = mongoose.connection

export default db;