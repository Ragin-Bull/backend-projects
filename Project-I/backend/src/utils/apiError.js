// An extension to the Error class of JS
class APIError extends Error {
  constructor(
    statusCode,
    msg = "Something went wrong",
    errors = [],
    statck = ""
  ) {
    // For overriding stuffs
    // Check the documentation of the Error class for more details:
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    // if (statck) {
    //     this.statck = statck
    // }
    // else {
    // Error.captureStackTrace(this, this.constructor)
    // }
  }
}

export default APIError;
