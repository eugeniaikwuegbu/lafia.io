import { injectable } from 'inversify';
import { transaction } from 'objection';
import {  GenericResponseError, HttpStatusCode } from '../../utils';
import {FileUploadModel, IFileUpload} from "../../models";

@injectable()
export class FileUploadRepository {
  public async addFile(data: IFileUpload): Promise<IFileUpload> {
    try {
      return await transaction(FileUploadModel, async (FileUploadModel) => {
        return FileUploadModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
