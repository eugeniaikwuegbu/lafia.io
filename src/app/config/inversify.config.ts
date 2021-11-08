import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
import {
  ContactRepository, StatusRepository,
  HospitalLocationRepository, HospitalRepository,
  HospitalServiceRepository, LocationRepository,
  PersonnelRepository, ServiceRepository,
} from '../repositories';
// import {} from '../controllers';
// import {} from '../services';

const container = new Container();

// controllers
// container
//   .bind<UserController>(TYPES.UserController)
//   .to(UserController)
//   .inSingletonScope();



// services
// container
//   .bind<CardService>(TYPES.CardService)
//   .to(CardService)
//   .inSingletonScope();



// repositories
container
  .bind<ContactRepository>(TYPES.ContactRepository)
  .to(ContactRepository)
  .inSingletonScope();

container
  .bind<HospitalLocationRepository>(TYPES.HospitalLocationRepository)
  .to(HospitalLocationRepository)
  .inSingletonScope();

container
  .bind<HospitalRepository>(TYPES.HospitalRepository)
  .to(HospitalRepository)
  .inSingletonScope();

container
  .bind<HospitalServiceRepository>(TYPES.HospitalServiceRepository)
  .to(HospitalServiceRepository)
  .inSingletonScope();

container
  .bind<LocationRepository>(TYPES.LocationRepository)
  .to(LocationRepository)
  .inSingletonScope();

container
  .bind<PersonnelRepository>(TYPES.PersonnelRepository)
  .to(PersonnelRepository)
  .inSingletonScope();

container
  .bind<ServiceRepository>(TYPES.ServiceRepository)
  .to(ServiceRepository)
  .inSingletonScope();

container
  .bind<StatusRepository>(TYPES.StatusRepository)
  .to(StatusRepository)
  .inSingletonScope();

export default container;
