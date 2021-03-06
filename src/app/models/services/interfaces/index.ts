import { IBase } from '../../base';

export interface IService extends IBase {
 out_patient: boolean;
 in_patient: boolean;
 medical: string;
 surgical: string;
 obsterics_and_gynae: string;
 pediatrics: string;
 dental: string;
 specific_clinical: string;
 beds: number;
 onsite_lab: boolean;
 onsite_imaging: boolean;
 onsite_pharmacy: boolean;
 mortuary: boolean;
 ambulance: boolean;
}

export interface IFindService extends IBase {
  out_patient?: boolean;
  in_patient?: boolean;
  medical?: string;
  surgical?: string;
  obsterics_and_gynae?: string;
  pediatrics?: string;
  dental?: string;
  specific_clinical?: string;
  beds?: number;
  onsite_lab?: boolean;
  onsite_imaging?: boolean;
  onsite_pharmacy?: boolean;
  mortuary?: boolean;
  ambulance?: boolean;
}
