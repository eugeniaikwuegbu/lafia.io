import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindLocation, ILocation} from "../../models";
import {LocationRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class LocationService {
  @inject(TYPES.LocationRepository)
  private readonly locationRepo: LocationRepository;


  public async addLocation(data: ILocation): Promise<any> {
    try {
      return await this.locationRepo.addLocation(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findLocationById(id: string): Promise<any> {
    try {
      return await this.locationRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindLocation): Promise<any> {
    try {
      return await this.locationRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateLocationById(id: string, data: IFindLocation): Promise<any> {
    try {
      return await this.locationRepo.updateLocationById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
