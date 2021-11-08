import { injectable } from 'inversify';
import { transaction } from 'objection';
import {HospitalServiceModel, IFindHospitalService, IHospitalService} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class HospitalServiceRepository {
  public async createHospitalService(data: IHospitalService): Promise<IHospitalService> {
    try {
      return await transaction(HospitalServiceModel, async (HospitalServiceModel) => {
        return HospitalServiceModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindHospitalService): Promise<IHospitalService> {
    try {
      return await transaction(HospitalServiceModel, async (HospitalServiceModel) => {
        return HospitalServiceModel.query().where(data).withGraphFetched(`[
        hospitals, services ]`)
          .first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IHospitalService> {
    try {
      return await transaction(HospitalServiceModel, async (HospitalServiceModel) => {
        return HospitalServiceModel.query().where({ id }).withGraphFetched(`[
         hospitals, services ]`)
          .first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllHospitalServices(): Promise<any> {
    try {
      return await transaction(HospitalServiceModel, async (HospitalServiceModel) => {
        return HospitalServiceModel.query().withGraphFetched(`[
          hospitals, services ]`);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateById(id: string, data: IFindHospitalService): Promise<IHospitalService> {
    try {
      return await transaction(HospitalServiceModel, async (HospitalServiceModel) => {
        return HospitalServiceModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
