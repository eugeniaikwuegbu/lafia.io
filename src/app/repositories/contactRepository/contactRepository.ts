import { injectable } from 'inversify';
import { transaction } from 'objection';
import {ContactModel, IContact, IFindContact} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class ContactRepository {
  public async createContact(data: IContact): Promise<IContact> {
    try {
      return await transaction(ContactModel, async (ContactModel) => {
        return ContactModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindContact): Promise<IContact> {
    try {
      return await transaction(ContactModel, async (ContactModel) => {
        return ContactModel.query().where(data).first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IContact> {
    try {
      return await transaction(ContactModel, async (ContactModel) => {
        return ContactModel.query().where({ id }).first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllContacts(): Promise<any> {
    try {
      return await transaction(ContactModel, async (ContactModel) => {
        return ContactModel.query();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateContactById(id: string, data: IFindContact): Promise<IContact> {
    try {
      return await transaction(ContactModel, async (ContactModel) => {
        return ContactModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractContactData(data: any) {
    return {
      phone_number: data['Phone Number'],
      alternate_number: data['Alternate Number'],
      email: data['Email Address'],
      website: data['Website'],
    };
  }
}
