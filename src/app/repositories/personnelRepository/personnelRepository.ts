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

  public extractPersonnelData(data: any) {
    return {
      doctors: Number(data["Number of Doctors"]),
      pharmacists: Number(data["Number of Pharmacists"]),
      pharmacy_technicians: Number(data["Number Pharmacy Technicians"]),
      dentists: Number(data["Number of Dentists"]),
      dental_technicians: Number(data["Number of Dental Technicians"]),
      nurses: Number(data["Number of Nurses"]),
      midwifes: Number(data["Number of Midwifes"]),
      nurses_or_midwifes: Number(data["Number of Nurses/Midwifes"]),
      lab_technicians: Number(data["Number of Lab Technicians"]),
      lab_scientists: Number(data["Number of Lab Scientits"]),
      health_records_officers: Number(data["Health Records/HIM Officers"]),
      community_health_officers: Number(data["Number of Community Health Officer"]),
      community_health_extension_workers: Number(data["Number of Community Health Extension Worker"]),
      junior_community_health_workers: Number(data["Number of Junior Com Health Extension Worker"]),
      environment_health_officers: Number(data["Number of Environmental Health Officers"]),
      health_attendant: Number(data["Number of Health Attendant/Assistant"]),
    };
  }
}
