import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPersonnel } from './interfaces';
import { PersonnelValidation } from './validation';

export class PersonnelModel extends BaseModel implements IPersonnel {
  public doctors: IPersonnel['doctors'];
  public pharmacists: IPersonnel['pharmacists'];
  public pharmacy_technicians: IPersonnel['pharmacy_technicians'];
  public dentists: IPersonnel['dentists'];
  public dental_technicians: IPersonnel['dental_technicians'];
  public nurses: IPersonnel['nurses'];
  public midwifes: IPersonnel['midwifes'];
  public nurses_or_midwifes: IPersonnel['nurses_or_midwifes']
  public lab_technicians: IPersonnel['lab_technicians'];
  public lab_scientists: IPersonnel['lab_scientists'];
  public health_records_officers: IPersonnel['health_records_officers'];
  public community_health_officers: IPersonnel['community_health_officers'];
  public community_health_extension_workers: IPersonnel['community_health_extension_workers'];
  public junior_community_health_extension_workers: IPersonnel['junior_community_health_extension_workers'];
  public environment_health_officers: IPersonnel['environment_health_officers'];
  public health_attendants: IPersonnel['health_attendants'];


  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.personnels}`;
  }

  static get jsonSchema(): JSONSchema {
    return PersonnelValidation;
  }
}
