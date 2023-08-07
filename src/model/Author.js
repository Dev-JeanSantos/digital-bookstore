import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {
      type: String, 
      required: [true, "author name required!"]
    },
    nationality: {
      type: String, 
      required: [true, "author nationality required!"]  
    }
  },
  {
    versionKey: false
  }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;

