import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {
      type: String, 
      required: [true, "Book title required!"]    
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"authors", 
      required: [true, "author Id required!"]  
    },
    companyPublish: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"companyPublish",
      required: [true, "Company Publish Id required!"]  },
    numberPages: {type: Number},
  }
);

const books = mongoose.model("books", bookSchema);

export default books;

