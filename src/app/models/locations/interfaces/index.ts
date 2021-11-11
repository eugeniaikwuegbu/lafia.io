import { IBase } from '../../base';

export interface ILocation extends IBase {
 state: string;
 lga: string;
 ward: string;
 location: string;
 postal_address: string;
 longitude: number;
 latitude: number;
}

export interface IFindLocation extends IBase {
  state?: string;
  lga?: string;
  ward?: string;
  location?: string;
  postal_address?: string;
  longitude?: number;
  latitude?: number;
}
