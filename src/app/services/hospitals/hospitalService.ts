import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindHospital, IHospital} from "../../models";
import {HospitalRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class HospitalService {
  @inject(TYPES.HospitalRepository)
  private readonly hospitalRepo: HospitalRepository;


  public async createHospital(data: IHospital): Promise<any> {
    try {
      return await this.hospitalRepo.createHospital(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findHospitalById(id: string): Promise<any> {
    try {
      return await this.hospitalRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindHospital): Promise<any> {
    try {
      return await this.hospitalRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateHospitalById(id: string, data: IFindHospital): Promise<any> {
    try {
      return await this.hospitalRepo.updateHospitalById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
