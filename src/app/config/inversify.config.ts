import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
import {
  NotificationSettingRepository,
  BankDetailRepository, CardRepository,
  ParcelRepository, ReceiverRepository,
  TravellerRepository, WalletRepository,
  RolesRepository, ParcelStatusRepository,
  NotificationRepository, StatusRepository,
  PermissionRepository, GuarantorRepository,
  UserRepository, RolesPermissionsRepository,
  DropPointRepository, VerificationRepository,
  TransactionRepository, SendersReceiversRepository,
  TransactionStatusRepository, PaymentSettingRepository,
  DiscountRepository, UserDiscountRepository, TwilioServiceRepository,
} from '../repositories';
import {
  UserController,
  StatusController,
  TransactionController,
  DropPointController,
  NotificationSettingController,
  PermissionController, RoleController,
  PaymentController, BankDetailController,
  TravellerController, ParcelController,
  PaymentSettingController, CardController,
  WalletController, DiscountController, OtpController
} from '../controllers';
import {
  NotificationSettingService,
  RoleService,
  TransactionService,
  SendersReceiversService,
  ParcelStatusService,
  TransactionStatusService,
  UserService,
  BankDetailService,
  GuarantorService,
  ParcelService,
  ReceiverService,
  TravellerService,
  NotificationService,
  PermissionService,
  CardService,
  StatusService,
  WalletService,
  RolesPermissionsService,
  CloudinaryService,
  PaystackService,
  MessageService,
  PaymentSettingService,
  DropPointService,
  VerificationService,
  DiscountService,
  UserDiscountService, TwilioServiceService,
} from '../services';

const container = new Container();

// controllers
container
  .bind<UserController>(TYPES.UserController)
  .to(UserController)
  .inSingletonScope();
container
  .bind<RoleController>(TYPES.RoleController)
  .to(RoleController)
  .inSingletonScope();
container
  .bind<StatusController>(TYPES.StatusController)
  .to(StatusController)
  .inSingletonScope();
container
  .bind<PaymentController>(TYPES.PaymentController)
  .to(PaymentController)
  .inSingletonScope();
container
  .bind<TravellerController>(TYPES.TravellerController)
  .to(TravellerController)
  .inSingletonScope();
container
  .bind<PermissionController>(TYPES.PermissionController)
  .to(PermissionController)
  .inSingletonScope();
container
  .bind<BankDetailController>(TYPES.BankDetailController)
  .to(BankDetailController)
  .inSingletonScope();
container
  .bind<TransactionController>(TYPES.TransactionController)
  .to(TransactionController)
  .inSingletonScope();
container
  .bind<NotificationSettingController>(TYPES.NotificationSettingController)
  .to(NotificationSettingController)
  .inSingletonScope();
container
  .bind<ParcelController>(TYPES.ParcelController)
  .to(ParcelController)
  .inSingletonScope();
container
  .bind<PaymentSettingController>(TYPES.PaymentSettingController)
  .to(PaymentSettingController)
  .inSingletonScope();
container
  .bind<DropPointController>(TYPES.DropPointController)
  .to(DropPointController)
  .inSingletonScope();
container
  .bind<CardController>(TYPES.CardController)
  .to(CardController)
  .inSingletonScope();
container
  .bind<WalletController>(TYPES.WalletController)
  .to(WalletController)
  .inSingletonScope();
container
  .bind<DiscountController>(TYPES.DiscountController)
  .to(DiscountController)
  .inSingletonScope();
container
  .bind<OtpController>(TYPES.OtpController)
  .to(OtpController)
  .inSingletonScope();


// services
container
  .bind<CardService>(TYPES.CardService)
  .to(CardService)
  .inSingletonScope();
container
  .bind<RoleService>(TYPES.RoleService)
  .to(RoleService)
  .inSingletonScope();
container
  .bind<DropPointService>(TYPES.DropPointService)
  .to(DropPointService)
  .inSingletonScope();
container
  .bind<UserService>(TYPES.UserService)
  .to(UserService)
  .inSingletonScope();
container
  .bind<ParcelService>(TYPES.ParcelService)
  .to(ParcelService)
  .inSingletonScope();
container
  .bind<WalletService>(TYPES.WalletService)
  .to(WalletService)
  .inSingletonScope();
container
  .bind<StatusService>(TYPES.StatusService)
  .to(StatusService)
  .inSingletonScope();
container
  .bind<MessageService>(TYPES.MessageService)
  .to(MessageService)
  .inSingletonScope();
container
  .bind<PaystackService>(TYPES.PaystackService)
  .to(PaystackService)
  .inSingletonScope();
container
  .bind<ReceiverService>(TYPES.ReceiverService)
  .to(ReceiverService)
  .inSingletonScope();
container
  .bind<TravellerService>(TYPES.TravellerService)
  .to(TravellerService)
  .inSingletonScope();
container
  .bind<GuarantorService>(TYPES.GuarantorService)
  .to(GuarantorService)
  .inSingletonScope();
container
  .bind<PermissionService>(TYPES.PermissionService)
  .to(PermissionService)
  .inSingletonScope();
container
  .bind<BankDetailService>(TYPES.BankDetailService)
  .to(BankDetailService)
  .inSingletonScope();
container
  .bind<TransactionService>(TYPES.TransactionService)
  .to(TransactionService)
  .inSingletonScope();
container
  .bind<CloudinaryService>(TYPES.CloudinaryService)
  .to(CloudinaryService)
  .inSingletonScope();
container
  .bind<NotificationService>(TYPES.NotificationService)
  .to(NotificationService)
  .inSingletonScope();
container
  .bind<ParcelStatusService>(TYPES.ParcelStatusService)
  .to(ParcelStatusService)
  .inSingletonScope();
container
  .bind<PaymentSettingService>(TYPES.PaymentSettingService)
  .to(PaymentSettingService)
  .inSingletonScope();
container
  .bind<RolesPermissionsService>(TYPES.RolesPermissionsService)
  .to(RolesPermissionsService)
  .inSingletonScope();
container
  .bind<SendersReceiversService>(TYPES.SendersReceiversService)
  .to(SendersReceiversService)
  .inSingletonScope();
container
  .bind<TransactionStatusService>(TYPES.TransactionStatusService)
  .to(TransactionStatusService)
  .inSingletonScope();
container
  .bind<NotificationSettingService>(TYPES.NotificationSettingService)
  .to(NotificationSettingService)
  .inSingletonScope();
container
  .bind<VerificationService>(TYPES.VerificationService)
  .to(VerificationService)
  .inSingletonScope();
container
  .bind<DiscountService>(TYPES.DiscountService)
  .to(DiscountService)
  .inSingletonScope();
container
  .bind<UserDiscountService>(TYPES.UserDiscountService)
  .to(UserDiscountService)
  .inSingletonScope();
container
  .bind<TwilioServiceService>(TYPES.TwilioServiceService)
  .to(TwilioServiceService)
  .inSingletonScope();


// repositories
container
  .bind<CardRepository>(TYPES.CardRepository)
  .to(CardRepository)
  .inSingletonScope();
container
  .bind<RolesRepository>(TYPES.RoleRepository)
  .to(RolesRepository)
  .inSingletonScope();
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(UserRepository)
  .inSingletonScope();
container
  .bind<WalletRepository>(TYPES.WalletRepository)
  .to(WalletRepository)
  .inSingletonScope();
container
  .bind<ParcelRepository>(TYPES.ParcelRepository)
  .to(ParcelRepository)
  .inSingletonScope();
container
  .bind<StatusRepository>(TYPES.StatusRepository)
  .to(StatusRepository)
  .inSingletonScope();
container
  .bind<ReceiverRepository>(TYPES.ReceiverRepository)
  .to(ReceiverRepository)
  .inSingletonScope();
container
  .bind<TravellerRepository>(TYPES.TravellerRepository)
  .to(TravellerRepository)
  .inSingletonScope();
container
  .bind<DropPointRepository>(TYPES.DropPointRepository)
  .to(DropPointRepository)
  .inSingletonScope();
container
  .bind<GuarantorRepository>(TYPES.GuarantorRepository)
  .to(GuarantorRepository)
  .inSingletonScope();
container
  .bind<BankDetailRepository>(TYPES.BankDetailRepository)
  .to(BankDetailRepository)
  .inSingletonScope();
container
  .bind<PermissionRepository>(TYPES.PermissionRepository)
  .to(PermissionRepository)
  .inSingletonScope();
container
  .bind<TransactionRepository>(TYPES.TransactionRepository)
  .to(TransactionRepository)
  .inSingletonScope();
container
  .bind<ParcelStatusRepository>(TYPES.ParcelStatusRepository)
  .to(ParcelStatusRepository)
  .inSingletonScope();
container
  .bind<NotificationRepository>(TYPES.NotificationRepository)
  .to(NotificationRepository)
  .inSingletonScope();
container
  .bind<PaymentSettingRepository>(TYPES.PaymentSettingRepository)
  .to(PaymentSettingRepository)
  .inSingletonScope();
container
  .bind<RolesPermissionsRepository>(TYPES.RolesPermissionsRepository)
  .to(RolesPermissionsRepository)
  .inSingletonScope();
container
  .bind<SendersReceiversRepository>(TYPES.SendersReceiversRepository)
  .to(SendersReceiversRepository)
  .inSingletonScope();
container
  .bind<TransactionStatusRepository>(TYPES.TransactionStatusRepository)
  .to(TransactionStatusRepository)
  .inSingletonScope();
container
  .bind<NotificationSettingRepository>(TYPES.NotificationSettingRepository)
  .to(NotificationSettingRepository)
  .inSingletonScope();
container
  .bind<VerificationRepository>(TYPES.VerificationRepository)
  .to(VerificationRepository)
  .inSingletonScope();
container
  .bind<DiscountRepository>(TYPES.DiscountRepository)
  .to(DiscountRepository)
  .inSingletonScope();
container
  .bind<UserDiscountRepository>(TYPES.UserDiscountRepository)
  .to(UserDiscountRepository)
  .inSingletonScope();
container
  .bind<TwilioServiceRepository>(TYPES.TwilioServiceRepository)
  .to(TwilioServiceRepository)
  .inSingletonScope();

export default container;
