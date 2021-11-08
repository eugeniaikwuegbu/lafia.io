import { injectable } from 'inversify';
import { transaction } from 'objection';
import {IFindStatus, IStatus, StatusModel} from '../../models';
import {  GenericResponseError, HttpStatusCode } from '../../utils';

@injectable()
export class StatusRepository {
  public async addStatus(data: IStatus): Promise<IStatus> {
    try {
      return await transaction(StatusModel, async (StatusModel) => {
        return StatusModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindStatus): Promise<IStatus> {
    try {
      return await transaction(StatusModel, async (StatusModel) => {
        return StatusModel.query().where(data).first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IStatus> {
    try {
      return await transaction(StatusModel, async (StatusModel) => {
        return StatusModel.query().where({ id }).first();
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateStatusById(id: string, data: IFindStatus): Promise<IStatus> {
    try {
      return await transaction(StatusModel, async (StatusModel) => {
        return StatusModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

}
