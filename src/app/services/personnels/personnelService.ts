import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindPersonnel, IPersonnel} from "../../models";
import {PersonnelRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class PersonnelService {
  @inject(TYPES.PersonnelRepository)
  private readonly personnelRepo: PersonnelRepository;


  public async addPersonnel(data: IPersonnel): Promise<any> {
    try {
      return await this.personnelRepo.addPersonnel(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findById(id: string): Promise<any> {
    try {
      return await this.personnelRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindPersonnel): Promise<any> {
    try {
      return await this.personnelRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updatePersonnelById(id: string, data: IFindPersonnel): Promise<any> {
    try {
      return await this.personnelRepo.updatePersonnelById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
