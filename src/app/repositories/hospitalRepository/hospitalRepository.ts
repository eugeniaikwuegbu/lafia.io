import { injectable } from 'inversify';
import { transaction } from 'objection';
import {HospitalModel, IFindHospital, IHospital} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class HospitalRepository {
  public async createHospital(data: IHospital): Promise<IHospital> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindHospital): Promise<IHospital> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query().where(data).withGraphFetched(`[
        statuses, personnels, contacts ]`)
          .first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IHospital> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query().where({ id }).withGraphFetched(`[
          statuses, personnels, contacts
        ]`)
          .first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllHospitals(): Promise<any> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query().withGraphFetched(`[
          statuses, personnels, contacts
        ]`);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateHospitalById(id: string, data: IFindHospital): Promise<IHospital> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

}
