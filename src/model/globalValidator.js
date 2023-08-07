import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor.trim() != "",
  message: ({path}) => `A blank field ${path} was provided`
});