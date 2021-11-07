import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IHospitalService } from './interfaces';
import { HospitalServiceValidation } from './validation';

export class HospitalServiceModel extends BaseModel implements IHospitalService {
  public service_id: IHospitalService['service_id'];
  public hospital_id: IHospitalService['hospital_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.hospital_services}`;
  }

  static get jsonSchema(): JSONSchema {
    return HospitalServiceValidation;
  }
}
