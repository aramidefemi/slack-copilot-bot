/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import HttpStatus from 'http-status-codes';
import CustomError from './customeError';

export default class ResponseHandler {

  static createErrorDescription = (code: number, message = '') => {
    switch (code) {
      case 400:
        return 'Bad Request';
      case 401:
        return 'Unauthorized: Be sure you configured the integration to use a valid API key';
      case 403:
        return `Invalid request: ${message}`;
      case 404:
        return `Not found: ${message}`;
      case 503:
        return `Short URL service currently under maintenance. Retry later`;
      default:
        return `Unexpected error connecting to Rebrandly APIs`;
    }
  };

  static ErrorResponse(res: Response, statusCode: number, error = '') {
    const message = this.createErrorDescription(statusCode, error);
    return res.status(statusCode).json({ message, status: false });
  }

  static existsOrError = (
    data: any,
    message: string,
    code = HttpStatus.NOT_FOUND,
  ) => {
    if (!data) {
      throw new CustomError(message, code);
    }
  };

  static SuccessResponse(
    res: Response,
    statusCode: number,
    data?: any,
  ) {
    return res.status(statusCode).json(data);
  }

  static ServerErrorResponse(res: Response) {
    return res
      .status(500)
      .json({ message: 'Internal Server Error', status: false });
  }
}
