import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindStatus, IStatus} from "../../models";
import {StatusRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class StatusService {
  @inject(TYPES.StatusRepository)
  private readonly statusRepo: StatusRepository;


  public async createStatus(data: IStatus): Promise<any> {
    try {
      return await this.statusRepo.addStatus(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findStatusById(id: string): Promise<any> {
    try {
      return await this.statusRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindStatus): Promise<any> {
    try {
      return await this.statusRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateStatusById(id: string, data: IFindStatus): Promise<any> {
    try {
      return await this.statusRepo.updateStatusById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
