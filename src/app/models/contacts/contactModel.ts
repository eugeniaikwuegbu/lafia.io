import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IContact } from './interfaces';
import { ContactValidation } from './validation';

export class ContactModel extends BaseModel implements IContact {
  public phone_number: IContact['phone_number'];
  public alternate_number: IContact['alternate_number'];
  public email: IContact['email'];
  public website: IContact['website'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.contacts}`;
  }

  static get jsonSchema(): JSONSchema {
    return ContactValidation;
  }
}
