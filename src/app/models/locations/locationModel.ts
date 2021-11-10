import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ILocation } from './interfaces';
import { LocationValidation } from './validation';

export class LocationModel extends BaseModel implements ILocation {
  public state: ILocation['state'];
  public lga: ILocation['lga'];
  public ward: ILocation['ward'];
  public location: ILocation['location'];
  public postal_address: ILocation['postal_address'];
  public longitude: ILocation['longitude'];
  public latitude: ILocation['latitude'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.locations}`;
  }

  static get jsonSchema(): JSONSchema {
    return LocationValidation;
  }
}
