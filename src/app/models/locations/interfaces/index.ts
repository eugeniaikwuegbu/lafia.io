import { IBase } from '../../base';

export interface ILocation extends IBase {
 state: string;
 lg: string;
 ward: string;
 location: string;
 postal_address: number;
 longitude: string;
 latitude: string;
}

export interface IFindLocation extends IBase {
  state?: string;
  lg?: string;
  ward?: string;
  location?: string;
  postal_address?: number;
  longitude?: string;
  latitude?: string;
}
