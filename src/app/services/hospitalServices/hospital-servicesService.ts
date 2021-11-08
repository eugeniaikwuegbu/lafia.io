import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindHospitalService, IHospitalService} from "../../models";
import {HospitalServiceRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class HospitalServiceService {
  @inject(TYPES.HospitalServiceRepository)
  private readonly hospitalServicesRepo: HospitalServiceRepository;


  public async createService(data: IHospitalService): Promise<any> {
    try {
      return await this.hospitalServicesRepo.createHospitalService(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findById(id: string): Promise<any> {
    try {
      return await this.hospitalServicesRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindHospitalService): Promise<any> {
    try {
      return await this.hospitalServicesRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateById(id: string, data: IFindHospitalService): Promise<any> {
    try {
      return await this.hospitalServicesRepo.updateById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
