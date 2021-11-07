import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IService } from './interfaces';
import { ServiceValidation } from './validation';

export class HospitalModel extends BaseModel implements IService {
  public out_patient: IService['out_patient'];
  public in_patient: IService['in_patient'];
  public medical: IService['medical'];
  public surgical: IService['surgical'];
  public obsterics_and_gynae: IService['obsterics_and_gynae'];
  public pediatrics: IService['pediatrics'];
  public dental: IService['dental'];
  public specific_clinical: IService['specific_clinical'];
  public bed: IService['bed'];
  public onsite_lab: IService['onsite_lab'];
  public onsite_imaging: IService['onsite_imaging'];
  public onsite_pharmacy: IService['onsite_pharmacy'];
  public mortuary: IService['mortuary'];
  public ambulance: IService['ambulance'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.services}`;
  }

  static get jsonSchema(): JSONSchema {
    return ServiceValidation;
  }
}
