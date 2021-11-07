import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IHospitalLocation } from './interfaces';
import { HospitalLocationValidation } from './validation';

export class HospitalLocationModel extends BaseModel implements IHospitalLocation {
  public hospital_id: IHospitalLocation['hospital_id'];
  public location_id: IHospitalLocation['location_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.hospital_locations}`;
  }

  static get jsonSchema(): JSONSchema {
    return HospitalLocationValidation;
  }
}
