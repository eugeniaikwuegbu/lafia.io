import { injectable } from 'inversify';
import { transaction } from 'objection';
import {IFindService, IService, ServiceModel} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';
import {v4 as uuidv4} from "uuid";

@injectable()
export class ServiceRepository {
  public async createService(data: IService): Promise<IService> {
    try {
      return await transaction(ServiceModel, async (ServiceModel) => {
        return ServiceModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindService): Promise<IService> {
    try {
      return await transaction(ServiceModel, async (ServiceModel) => {
        return ServiceModel.query().where(data).first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IService> {
    try {
      return await transaction(ServiceModel, async (ServiceModel) => {
        return ServiceModel.query().where({ id }).first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllServices(): Promise<any> {
    try {
      return await transaction(ServiceModel, async (ServiceModel) => {
        return ServiceModel.query();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateServiceById(id: string, data: IFindService): Promise<IService> {
    try {
      return await transaction(ServiceModel, async (ServiceModel) => {
        return ServiceModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public     extractServiceData(data: any) {
    return {
      id: uuidv4(),
      out_patient: data['Out Patient Services'] === 'Yes',
      in_patient: data['In Patient Services'] === 'Yes',
      medical: data['Medical Services'],
      surgical: data['Surgical Services'],
      pediatrics: data['Pedigree Services'],
      dental: data['Dental Services'],
      obsterics_and_gynae: data['Obsterics and Gynecology Services'],
      specific_clinical: data['Specific Clinical Services'],
      beds: Number(data['Total Number of Beds']) || 0,
      onsite_lab: data['Onsite Laboratory'] === 'Yes',
      onsite_imaging: data['Onsite Imaging'] === 'Yes',
      onsite_pharmacy: data['Onsite Pharmacy'] === 'Yes',
      mortuary: data['Mortuary Services'] === 'Yes',
      ambulance: data['Ambluance Services'] === 'Yes',
    };
  }
}
