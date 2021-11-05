import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
// import {} from '../repositories';
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
// container
//   .bind<CardRepository>(TYPES.CardRepository)
//   .to(CardRepository)
//   .inSingletonScope();

export default container;
