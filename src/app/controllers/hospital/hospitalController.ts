import { Request, Response } from 'express';
import {
  controller, httpGet, httpPost,
  request,
  response,
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { errorHandler, uploadFile } from '../../middlewares';
import { BaseController } from '../base';
import { inject } from 'inversify';
import { HospitalService} from "../../services";
import {GenericResponseError, HttpStatusCode } from "../../utils";

@controller('/hospitals')
export class HospitalController extends BaseController {
  @inject(TYPES.HospitalService)
  private readonly hospitalService: HospitalService;

  @httpPost('/upload', uploadFile, errorHandler)
  public async uploadFile(@request() req: Request, @response() res: Response) {
    try {
      const hospital = await this.hospitalService.createHospitalFromCsvData(req.file)
      this.success(res, hospital, 'Hospital Retrieved Successfully')
    } catch (e) {
      this.error(res, e);
    }
  }


  @httpGet('/')
  public async getAllHospitals(@request() req: Request, @response() res: Response) {
    try {
      const queryParams = req.extractQueryParams;
      const hospitals = await this.hospitalService.findAll(queryParams);
      this.success(res, hospitals, 'Hospitals Retrieved Successfully')
    }  catch (e) {
      this.error(res, new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR));
    }
  }
}
