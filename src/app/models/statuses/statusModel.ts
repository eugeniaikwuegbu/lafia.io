import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IStatus } from './interfaces';
import { StatusValidation } from './validation';

export class StatusModel extends BaseModel implements IStatus {
  public operational: IStatus['operational'];
  public registration: IStatus['registration'];
  public license: IStatus['license'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.statuses}`;
  }

  static get jsonSchema(): JSONSchema {
    return StatusValidation;
  }
}
