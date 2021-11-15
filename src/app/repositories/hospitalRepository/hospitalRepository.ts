import {injectable} from 'inversify';
import {transaction} from 'objection';
import {HospitalModel, IFindHospital, IHospital} from '../../models';
import {executePaginatedQuery, GenericResponseError, HttpStatusCode } from '../../utils';
import {v4 as uuidv4} from 'uuid';
import {QueryParams} from '../../middlewares';

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
        return HospitalModel.query().where({data}).withGraphFetched(`[
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
        return HospitalModel.query().where({id}).withGraphFetched(`[
          statuses, personnels, contacts, locations, services ]`)
          .first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findAllHospitals(queryParams?: QueryParams): Promise<any> {
    const { filters, pagination } = queryParams as QueryParams;
    const {
      state, lga, ward, ownership,
      facility_name, facility_level,
      service_category, service_type,
      license, operational, registration
    } = filters;

    try {

      let query = HospitalModel.query().joinRelated(`[  statuses, personnels, contacts, locations, services ]`);

      if (state) {
        query = query.whereRaw(`locations.state ILIKE '%${state}%'`);
      }

      if (lga) {
        query = query.whereRaw(`locations.lga ILIKE '%${lga}%'`);
      }

      if (ward) {
        query = query.whereRaw(`locations.ward ILIKE '%${ward}%'`);
      }

      if (ownership) {
        query = query.whereRaw(`ownership ILIKE '%${ownership}%'`);
      }

      if (facility_name) {

        query = query.whereRaw(`facility_name ILIKE '%${facility_name}%'`);
      }

      if (facility_level) {
        query = query.whereRaw(`facility_level ILIKE '%${facility_level}%'`);
      }

      if (service_type) {
        query = query.where('services.in_patient', service_type)
          .orWhere('services.out_patient', service_type);
      }

      if (service_category) {
        const [categoryName, value] = service_category.split('/');
        query = query.whereRaw(`services.${categoryName} ILIKE '%${value}%'`);
      }

      if (license) {
        query = query.whereRaw(`statuses.license ILIKE '%${license}%'`);
      }

      if (operational) {
        query = query.whereRaw(`statuses.operational ILIKE '%${operational}%'`);
      }

      if (registration) {
        query = query.whereRaw(`statuses.registration ILIKE '%${registration}%'`);
      }

      query = query.withGraphFetched(`[  statuses, personnels, contacts, locations, services ]`);

      return executePaginatedQuery(query, 'hospitals', pagination );
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findHospitalsBy(facility_name: IFindHospital): Promise<any> {
    try {
      return await transaction(HospitalModel, async (HospitalModel) => {
        return HospitalModel.query()
          .skipUndefined()
          .where({facility_name}).withGraphFetched(`[
          statuses, personnels, contacts, locations, services ]`)
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

  public async deleteHospital(id: string): Promise<any> {
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
