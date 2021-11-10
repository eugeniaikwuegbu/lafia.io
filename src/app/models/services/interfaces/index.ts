import { IBase } from '../../base';

export interface IService extends IBase {
 out_patient: string;
 in_patient: string;
 medical: string;
 surgical: string;
 obsterics_and_gynae: string;
 pediatrics: string;
 dental: string;
 specific_clinical: string;
 bed: number;
 onsite_lab: string;
 onsite_imaging: string;
 onsite_pharmacy: string;
 mortuary: string;
 ambulance: string;
}

export interface IFindService extends IBase {
  out_patient?: string;
  in_patient?: string;
  medical?: string;
  surgical?: string;
  obsterics_and_gynae?: string;
  pediatrics?: string;
  dental?: string;
  specific_clinical?: string;
  bed?: number;
  onsite_lab?: string;
  onsite_imaging?: string;
  onsite_pharmacy?: string;
  mortuary?: string;
  ambulance?: string;
}
