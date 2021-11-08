import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindService, IService} from "../../models";
import {ServiceRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class ServicesService {
  @inject(TYPES.ServiceRepository)
  private readonly serviceRepo: ServiceRepository;


  public async createService(data: IService): Promise<any> {
    try {
      return await this.serviceRepo.createService(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findServiceById(id: string): Promise<any> {
    try {
      return await this.serviceRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindService): Promise<any> {
    try {
      return await this.serviceRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateServiceById(id: string, data: IFindService): Promise<any> {
    try {
      return await this.serviceRepo.updateServiceById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
