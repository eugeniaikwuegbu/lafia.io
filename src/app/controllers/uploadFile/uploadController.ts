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
import {FileUploadService} from "../../services";

@controller('/upload')
export class UploadController extends BaseController {
  @inject(TYPES.FileUploadService)
  private readonly fileUploadService: FileUploadService;

  @httpPost('/', uploadFile, errorHandler)
  public async uploadFile(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { file } = req;
      const upload = await this.fileUploadService.uploadFile(file);

      this.success(res, upload, 'File uploaded successfully');
    } catch (e) {
      this.error(res, e);
    }
  }
}
