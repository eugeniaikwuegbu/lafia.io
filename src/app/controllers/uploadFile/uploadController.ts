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
import csv from "csvtojson";
import fs from "fs";

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
      // Upload CSV file using Multer
      this.success(res, req.file,'File uploaded successfully');
      // Extract CSV data
      const fileRows:string[] = [];
      // open uploaded file
      csv().fromFile(req.file.path)
        .on("data",async (data: string) => {
          fileRows.push(data);
          for (const data of fileRows) {
            await this.hospitalService.parseCSVDataToDB(data)
          }
        }).on("end", () => {
          fs.unlinkSync(req.file.path);
        })
    } catch (e) {
      this.error(res, e);
    }
  }
}
