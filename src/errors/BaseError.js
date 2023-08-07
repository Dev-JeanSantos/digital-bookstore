class BaseError extends Error {
  constructor(message = "Error Internal Servidor!", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }
  responseSend(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status
    });
  }
}

export default BaseError;