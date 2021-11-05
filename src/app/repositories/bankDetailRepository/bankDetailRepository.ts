import {injectable} from 'inversify';
import {transaction} from 'objection';
import {BankDetailModel, IBankDetail, IFindBankDetail} from '../../models';
import { executePaginatedQuery, GenericResponseError, HttpStatusCode, Pagination } from '../../utils';

@injectable()
export class BankDetailRepository {
  public async createBankDetail(data: IBankDetail): Promise<IBankDetail> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        return BankDetailModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      e.code = e.code || HttpStatusCode.INTERNAL_SERVER_ERROR;
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindBankDetail): Promise<IBankDetail> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        return BankDetailModel.query()
          .where(data)
          .withGraphFetched(`[users]`)
          .first();
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findBankDetailById(id: string): Promise<IBankDetail> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        return BankDetailModel.query()
          .findById(id)
          .withGraphFetched(`[users]`);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllBankAccounts(userId: string, pagination?: Pagination): Promise<any> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        const bk = BankDetailModel.query()
          .where({ user_id: userId })
          .withGraphFetched(`[users]`);

        return executePaginatedQuery(bk, 'bank_details', pagination);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateBankDetailById(id: string, data: IFindBankDetail): Promise<IBankDetail> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        return BankDetailModel.query().patchAndFetchById(id, data);
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
