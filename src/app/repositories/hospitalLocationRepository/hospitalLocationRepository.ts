import { injectable } from 'inversify';
import { transaction } from 'objection';
import {HospitalLocationModel, IFindHospitalLocation, IHospitalLocation} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class HospitalLocationRepository {
  public async createHospitalLocation(data: IHospitalLocation): Promise<IHospitalLocation> {
    try {
      return await transaction(HospitalLocationModel, async (HospitalLocationModel) => {
        return HospitalLocationModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindHospitalLocation): Promise<IHospitalLocation> {
    try {
      return await transaction(HospitalLocationModel, async (HospitalLocationModel) => {
        return HospitalLocationModel.query().where(data).withGraphFetched(`[
        hospitals, locations ]`)
          .first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IHospitalLocation> {
    try {
      return await transaction(HospitalLocationModel, async (HospitalLocationModel) => {
        return HospitalLocationModel.query().where({ id }).withGraphFetched(`[
          hospitals, locations ]`)
          .first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllHospitalLocations(): Promise<any> {
    try {
      return await transaction(HospitalLocationModel, async (HospitalLocationModel) => {
        return HospitalLocationModel.query().withGraphFetched(`[ hospitals, locations ]`);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateById(id: string, data: IFindHospitalLocation): Promise<IHospitalLocation> {
    try {
      return await transaction(HospitalLocationModel, async (HospitalLocationModel) => {
        return HospitalLocationModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

}
