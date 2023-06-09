import { ServerError, TooManyRequestsError } from "../errors";
import { HttpResponse } from "../contracts/http";

export const badRequest = (error?: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const tooManyRequests = (): HttpResponse => ({
  statusCode: 429,
  body: new TooManyRequestsError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
