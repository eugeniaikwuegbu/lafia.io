import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  BankDetailModel,
  IBankDetail,
  IFindBankDetail,
} from '../../models';
import { BankDetailRepository } from '../../repositories';
import { GenericResponseError, HttpStatusCode, Pagination } from '../../utils';
import {transaction} from "objection";

@injectable()
export class BankDetailService {
  @inject(TYPES.BankDetailRepository)
  private readonly bankDetailRepo: BankDetailRepository;

  public async createBankDetail(data: IBankDetail): Promise<any> {
    try {
      return await this.bankDetailRepo.createBankDetail(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async findById(id: string): Promise<any> {
    try {
      return await this.bankDetailRepo.findBankDetailById(id);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getAllBankAccounts(userId: string, pagination?: Pagination): Promise<any> {
    try {
      return await this.bankDetailRepo.getAllBankAccounts(userId, pagination);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findOne(data: IFindBankDetail): Promise<any> {
    try {
      return await this.bankDetailRepo.findOne(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }



  public async updateBankDetailById(id: string, data: IFindBankDetail): Promise<IBankDetail> {
    try {
      return await transaction(BankDetailModel, async (BankDetailModel) => {
        return BankDetailModel.query().patchAndFetchById(id, data)
      });
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
