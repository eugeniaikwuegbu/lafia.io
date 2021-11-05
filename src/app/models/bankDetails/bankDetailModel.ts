import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IBankDetail } from './interfaces';
import { BankDetailValidation } from './validation';

export class BankDetailModel extends BaseModel implements IBankDetail {
  public user_id: IBankDetail['user_id'];
  public bank_id: IBankDetail['bank_id'];
  public bank_code: IBankDetail['bank_code'];
  public bank_name: IBankDetail['bank_name'];
  public account_name: IBankDetail['account_name'];
  public account_number: IBankDetail['account_number'];
  public recipient_code: IBankDetail['recipient_code'];

  static get tableName(): string {
    return `${Schema.dropperService}.${Table.bank_details}`;
  }

  static get jsonSchema(): JSONSchema {
    return BankDetailValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      users: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../users',
        join: {
          from: `${Schema.dropperService}.${Table.bank_details}.user_id`,
          to: `${Schema.dropperService}.${Table.users}.id`
        }
      }
    }
  }
}
