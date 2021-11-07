import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IHospital } from './interfaces';
import { HospitalValidation } from './validation';

export class HospitalModel extends BaseModel implements IHospital {
  public facility_code: IHospital['facility_code'];
  public state_unique_id: IHospital['state_unique_id'];
  public registration_number: IHospital['registration_number'];
  public facility_name: IHospital['facility_name'];
  public alternate_name: IHospital['alternate_name'];
  public status_id: IHospital['status_id'];
  public contact_id: IHospital['contact_id'];
  public personnel_id: IHospital['personnel_id'];
  public start_date: IHospital['start_date'];
  public ownership: IHospital['ownership'];
  public ownership_type: IHospital['ownership_type'];
  public facility_level: IHospital['facility_level'];
  public facility_level_option: IHospital['facility_level_option'];
  public days_of_operation: IHospital['days_of_operation'];
  public hours_of_operation: IHospital['hours_of_operation'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.hospitals}`;
  }

  static get jsonSchema(): JSONSchema {
    return HospitalValidation;
  }
}
