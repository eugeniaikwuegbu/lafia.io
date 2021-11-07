import { JSONSchema, RelationMappings } from 'objection';
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

  static get relationMappings(): RelationMappings {
    return {
      hospitals: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../hospitals',
        join: {
          from: `${Schema.lafiaService}.${Table.hospital_services}.hospital_id`,
          to: `${Schema.lafiaService}.${Table.hospitals}.id`
        }
      },

      services: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../services',
        join: {
          from: `${Schema.lafiaService}.${Table.hospital_services}.service_id`,
          to: `${Schema.lafiaService}.${Table.services}.id`
        }
      },
    }
  }
}
