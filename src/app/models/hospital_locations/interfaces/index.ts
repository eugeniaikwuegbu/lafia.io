import { IBase } from '../../base';

export interface IHospitalLocation extends IBase {
 hospital_id: string;
 location_id: string;
}

export interface IFindHospitalLocation extends IBase {
  hospital_id?: string;
  location_id?: string;
}
