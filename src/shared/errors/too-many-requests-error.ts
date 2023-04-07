export class TooManyRequestsError extends Error {
  constructor() {
    super("Too many requests error");
    this.name = "TooManyRequestsError";
  }
}