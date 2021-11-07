import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPersonnel } from './interfaces';
import { PersonnelValidation } from './validation';

export class PersonnelModel extends BaseModel implements IPersonnel {
  public doctor: IPersonnel['doctor'];
  public pharmacist: IPersonnel['pharmacist'];
  public pharmacy_technician: IPersonnel['pharmacy_technician'];
  public dentist: IPersonnel['dentist'];
  public dental_technician: IPersonnel['dental_technician'];
  public nurse: IPersonnel['nurse'];
  public midwife: IPersonnel['midwife'];
  public lab_technician: IPersonnel['lab_technician'];
  public lab_scientist: IPersonnel['lab_scientist'];
  public health_records_officer: IPersonnel['health_records_officer'];
  public comm_health_officer: IPersonnel['comm_health_officer'];
  public comm_health_extension_worker: IPersonnel['comm_health_extension_worker'];
  public junior_comm_health_extension_worker: IPersonnel['junior_comm_health_extension_worker'];
  public environment_health_officer: IPersonnel['environment_health_officer'];
  public health_attendant: IPersonnel['health_attendant'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.personnels}`;
  }

  static get jsonSchema(): JSONSchema {
    return PersonnelValidation;
  }
}
