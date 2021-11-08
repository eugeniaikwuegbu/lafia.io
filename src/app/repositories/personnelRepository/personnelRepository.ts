import { injectable } from 'inversify';
import { transaction } from 'objection';
import {IFindPersonnel, IPersonnel, PersonnelModel} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class PersonnelRepository {
  public async addPersonnel(data: IPersonnel): Promise<IPersonnel> {
    try {
      return await transaction(PersonnelModel, async (PersonnelModel) => {
        return PersonnelModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindPersonnel): Promise<IPersonnel> {
    try {
      return await transaction(PersonnelModel, async (PersonnelModel) => {
        return PersonnelModel.query().where(data).first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IPersonnel> {
    try {
      return await transaction(PersonnelModel, async (PersonnelModel) => {
        return PersonnelModel.query().where({ id }).first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllPersonnel(): Promise<any> {
    try {
      return await transaction(PersonnelModel, async (PersonnelModel) => {
        return PersonnelModel.query();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updatePersonnelById(id: string, data: IFindPersonnel): Promise<IPersonnel> {
    try {
      return await transaction(PersonnelModel, async (PersonnelModel) => {
        return PersonnelModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

}
