import { injectable } from 'inversify';
import { transaction } from 'objection';
import {HospitalModel, IFindHospital, IHospital} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class HospitalRepository {
  public async createHospital(data: any): Promise<IHospital> {
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
        statuses, personnels, contacts, locations, services ]`)
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
          statuses, personnels, contacts, locations, services ]`)
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
          statuses, personnels, contacts, locations, services ]`);
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

  public async deleteHospital( id: string): Promise<any> {
    return await transaction(HospitalModel, async (HospitalModel) => {
      return HospitalModel.query().deleteById(id)
    })
  }

  public extractHospitalData(data: any) {
    return {
      id: uuidv4(),
      facility_code: data["unique_id"],
      state_unique_id: data["state_unique_id"],
      registration_number: data["Registration No"],
      facility_name: data["Facility Name"],
      alternate_name: data["Alternate Name"],
      start_date: data["Start Date"],
      ownership: data["Ownership"],
      ownership_type: data["Ownership Type"],
      facility_level: data["Facility Level"],
      facility_level_option: data["Facility Level Option"],
      days_of_operation: data["Days of Operation"],
      hours_of_operation: data["Hours of Operation"],
    };
  }

}
