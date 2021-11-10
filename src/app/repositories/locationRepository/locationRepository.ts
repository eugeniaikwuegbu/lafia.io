import { injectable } from 'inversify';
import { transaction } from 'objection';
import {IFindLocation, ILocation, LocationModel} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class LocationRepository {
  public async addLocation(data: ILocation): Promise<ILocation> {
    try {
      return await transaction(LocationModel, async (LocationModel) => {
        return LocationModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindLocation): Promise<ILocation> {
    try {
      return await transaction(LocationModel, async (LocationModel) => {
        return LocationModel.query().where(data).first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<ILocation> {
    try {
      return await transaction(LocationModel, async (LocationModel) => {
        return LocationModel.query().where({ id }).first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllLocations(): Promise<any> {
    try {
      return await transaction(LocationModel, async (LocationModel) => {
        return LocationModel.query();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateLocationById(id: string, data: IFindLocation): Promise<ILocation> {
    try {
      return await transaction(LocationModel, async (LocationModel) => {
        return LocationModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractLocationData(data: any ) {
    return {
      state: data['State'],
      lga: data['LGA'],
      ward: data['Ward'],
      location: data['Physical Location'],
      postal_address: data['Postal Address'],
      longitude: Number(data['Longitude']),
      latitude: Number(data['Latitude']),
    };
  }
}
