import { inject } from 'inversify';
import { Request, Response } from 'express';
import {
  controller, httpGet,
  httpPost,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { Auth } from '../../middlewares';
import { BankDetailService } from '../../services';
import { HttpStatusCode, Pagination, Roles } from '../../utils';
import { BaseController } from '../base';

const { authenticate, permit } = new Auth();

@controller('/banks')
export class BankDetailController extends BaseController {
  @inject(TYPES.BankDetailService)
  private readonly bankDetailService: BankDetailService;

  @httpPost('/', authenticate, permit([Roles.USER, Roles.ADMIN, Roles.TRAVELLER]))
  public async addBankAccount(@request() req: Request, @response() res: Response) {
    try {
      const { user: { id: user_id }} = res.locals;

      const bank = await this.bankDetailService
        .createBankDetail({ ...req.body, user_id });

      this.success(res, bank, 'Bank account added successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/', authenticate, permit([Roles.USER, Roles.ADMIN, Roles.TRAVELLER]))
  public async getAllBankAccounts(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const pagination: Pagination = { size: Number(req.query.size), page: Number(req.query.page) };
      const bank = await this.bankDetailService.getAllBankAccounts(user.id!, pagination);

      this.success(res, bank, 'Bank account retrieved successfully');
    } catch (e) {
      this.error(res, e);
    }
  }
}
