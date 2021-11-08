import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindHospitalLocation, IHospitalLocation} from "../../models";
import {HospitalLocationRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class HospitalLocationService {
  @inject(TYPES.HospitalLocationRepository)
  private readonly hospitalLocationRepo: HospitalLocationRepository;


  public async createHospitalLocation(data: IHospitalLocation): Promise<any> {
    try {
      return await this.hospitalLocationRepo.createHospitalLocation(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findLocationById(id: string): Promise<any> {
    try {
      return await this.hospitalLocationRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindHospitalLocation): Promise<any> {
    try {
      return await this.hospitalLocationRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateLocationById(id: string, data: IFindHospitalLocation): Promise<any> {
    try {
      return await this.hospitalLocationRepo.updateById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
