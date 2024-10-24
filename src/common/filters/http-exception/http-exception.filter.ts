import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const error =
      typeof response === 'string'
        ? { message: response }
        : (exception.getResponse() as object);
    response.status(status).json({
      ...error,
      statusCode: status,
      timestamp: new Date().toISOString(),
    });
  }
}
