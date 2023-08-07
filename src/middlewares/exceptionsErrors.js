import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function exceptionsErrors(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).send({
      message: "bad data format!"
    });
  } else {
    res.status(500).send({
      message: "Error Internal Servidor!"
    });
  }
}
export default exceptionsErrors;