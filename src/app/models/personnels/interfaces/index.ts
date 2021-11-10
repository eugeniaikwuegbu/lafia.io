import { IBase } from '../../base';

export interface IPersonnel extends IBase {
 doctors: number;
 pharmacists: number;
 pharmacy_technicians: number;
 dentists: number;
 dental_technicians: number;
 nurses: number;
 midwifes: number;
 nurses_or_midwifes: number;
 lab_technicians: number;
 lab_scientists: number;
 health_records_officers: number;
 community_health_officers: number;
 community_health_extension_workers: number;
 junior_community_health_extension_workers: number;
 environment_health_officers: number;
 health_attendants: number;
}

export interface IFindPersonnel extends IBase {
  doctors?: number;
  pharmacists?: number;
  pharmacy_technicians?: number;
  dentists?: number;
  dental_technicians?: number;
  nurses?: number;
  midwifes?: number;
  nurses_or_midwifes?: number;
  lab_technicians?: number;
  lab_scientists?: number;
  health_records_officers?: number;
  community_health_officers?: number;
  community_health_extension_workers?: number;
  junior_community_health_extension_workers?: number;
  environment_health_officers?: number;
  health_attendants?: number;
}
