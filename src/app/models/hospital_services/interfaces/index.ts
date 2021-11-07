import { IBase } from '../../base';

export interface IHospitalService extends IBase {
 service_id: string;
 hospital_id: string;
}

export interface IFindHospitalService extends IBase {
  service_id?: string;
  hospital_id?: string;
}
