import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
  constructor(message = "one or more data is incorrect" ) {
    super(message, 400);
  }
}

export default IncorrectRequest;