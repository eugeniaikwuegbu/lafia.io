import {JSONSchema, RelationMappings} from 'objection';
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
  static get relationMappings(): RelationMappings {
    return {
      hospitals: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../hospitals',
        join: {
          from: `${Schema.lafiaService}.${Table.hospital_locations}.hospital_id`,
          to: `${Schema.lafiaService}.${Table.hospitals}.id`
        }
      },

      locations: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../locations',
        join: {
          from: `${Schema.lafiaService}.${Table.hospital_locations}.location_id`,
          to: `${Schema.lafiaService}.${Table.locations}.id`
        }
      },
    }
  }
}
