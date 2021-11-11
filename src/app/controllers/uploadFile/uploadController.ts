import { Request, Response } from 'express';
import {
  controller, httpPost,
  request,
  response,
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { errorHandler, uploadFile } from '../../middlewares';
import { BaseController } from '../base';
import { inject } from 'inversify';
import { HospitalService} from "../../services";

@controller('/upload')
export class UploadController extends BaseController {
  @inject(TYPES.HospitalService)
  private readonly hospitalService: HospitalService;

  @httpPost('/', uploadFile, errorHandler)
  public async uploadFile(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const hospital = await this.hospitalService.createHospitalFromCsvData(req.file)
      this.success(res, hospital, 'Fetched')
    } catch (e) {
      this.error(res, e);
    }
  }
}
