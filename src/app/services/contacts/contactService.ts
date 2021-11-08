import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IContact, IFindContact} from "../../models";
import {ContactRepository} from "../../repositories";
import {GenericResponseError, HttpStatusCode} from "../../utils";

@injectable()
export class ContactService {
  @inject(TYPES.ContactRepository)
  private readonly contactRepo: ContactRepository;


  public async addContact(data: IContact): Promise<any> {
    try {
      return await this.contactRepo.createContact(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async findContactById(id: string): Promise<any> {
    try {
      return await this.contactRepo.findById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindContact): Promise<any> {
    try {
      return await this.contactRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async updateContactById(id: string, data: IFindContact): Promise<any> {
    try {
      return await this.contactRepo.updateContactById(id, data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };
}
