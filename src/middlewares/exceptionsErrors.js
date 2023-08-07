import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function exceptionsErrors(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).send({
      message: "bad data format!"
    });
  }else if( error instanceof mongoose.Error.ValidationError){
    const messageError = Object.values(error.errors)
      .map( error => error.message)
      .join("; ");
    res.status(400).send({message: `erros founds: ${messageError}`});
  } else {
    res.status(500).send({
      message: "Error Internal Servidor!"
    });
  }
}
export default exceptionsErrors;