import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";

/* eslint-disable no-unused-vars */
function exceptionsErrors(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().responseSend(res);
  }else if( error instanceof mongoose.Error.ValidationError){
    new ValidationError(error).responseSend(res);
  }else if( error instanceof BaseError){
    error.responseSend(res);
  } 
  else {
    new BaseError().responseSend(res);
  }
}
export default exceptionsErrors;