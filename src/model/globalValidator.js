import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor != "",
  message: ({path}) => `A blank field ${path} was provided`
});