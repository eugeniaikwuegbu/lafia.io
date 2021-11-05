import { Response } from 'express';
import { injectable } from 'inversify';
import { GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export abstract class BaseController {
  protected success(
    res: Response,
    data: any = [],
    message: string = '',
    httpStatus: number = HttpStatusCode.OK,
  ) {
    return res.status(httpStatus).send({
      status: 'success',
      message,
      data,
    });
  }

  protected error(res: Response, e: GenericResponseError) {
    let { code, message } = e;

    code = code || HttpStatusCode.INTERNAL_SERVER_ERROR;

    return res.status(code).send({
      status: 'error',
      message,
    });
  }
}
