import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {FileUploadRepository} from '../../repositories';
import { GenericResponseError } from '../../utils';
import {IFileUpload} from "../../models";

@injectable()
export class FileUploadService {
  @inject(TYPES.FileUploadRepository)
  private readonly fileUploadRepo: FileUploadRepository;

  public async uploadFile(data: any): Promise<IFileUpload> {
    try {
      return await this.fileUploadRepo.addFile(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
