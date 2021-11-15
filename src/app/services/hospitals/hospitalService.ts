import {inject, injectable} from "inversify";
import TYPES from "../../config/types";
import {IFindHospital, IHospital} from "../../models";
import {
  ContactRepository,
  HospitalRepository,
  LocationRepository,
  PersonnelRepository,
  ServiceRepository, StatusRepository
} from "../../repositories";
import {error, GenericResponseError, HttpStatusCode, throwError} from "../../utils";
import csv from 'csvtojson'
import * as fs from "fs";

@injectable()
export class HospitalService {
  @inject(TYPES.ContactRepository)
  private readonly contactRepo: ContactRepository;

  @inject(TYPES.HospitalRepository)
  private readonly hospitalRepo: HospitalRepository;

  @inject(TYPES.LocationRepository)
  private readonly locationRepo: LocationRepository;

  @inject(TYPES.PersonnelRepository)
  private readonly personnelRepo: PersonnelRepository;

  @inject(TYPES.ServiceRepository)
  private readonly serviceRepo: ServiceRepository;

  @inject(TYPES.StatusRepository)
  private readonly statusRepo: StatusRepository;


  public async createHospital(data: IHospital): Promise<any> {
    try {
      return await this.hospitalRepo.createHospital(data);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };

  public async createHospitalFromCsvData(file: Express.Multer.File) {
    const filePath = file.path;
    const dataJson = await csv().fromFile(filePath);

    const responseData: any = {
      failed: [],
      successful: [],
      alreadyExists: [],
    };
    for (const data of dataJson) {
      const hospital = this.extractedHospitalData(data);

      try {
        if (hospital.facility_name) {
          const locationExists = await this.locationRepo.findOne({
            longitude: hospital.locations.longitude,
            latitude: hospital.locations.latitude,
            location: hospital.locations.location,
          });

          if (locationExists) {
            responseData.alreadyExists.push({
              message: 'Hospital already exists',
              data: hospital,
            });
          } else {
            const hospitalCreated = await this.hospitalRepo.createHospital(hospital);
            responseData.successful.push({
              message: 'New Hospital created successfully',
              data: hospitalCreated,
            });
          }
        }
      } catch (e) {
        console.log('Error:', e.message);
        responseData.failed.push({
          message: e.message?.split('-')[1] || e.message,
          data: hospital,
        });
      }
    }
      fs.unlinkSync(filePath);
    return responseData
  }

  public async findHospitalById(id: string): Promise<any> {
    try {
      const hospital = await this.hospitalRepo.findById(id);

      if (!hospital) {
        throwError('Hospital not found', error.notFound)
      }
      return {
        message: 'Hospital Retrieved Successfully',
        data: hospital
      }
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findOne(data: IFindHospital): Promise<any> {
    try {
      const hospital =  await this.hospitalRepo.findOne(data);

      if(!hospital) {
        throwError(`Hospital not found`, error.notFound)
      }
      return {
        message: 'Hospital Retrieved Successfully'
      }
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async findAll(queryParams?: QueryParams): Promise<any> {
    try{
     return await this.hospitalRepo.findAllHospitals(queryParams);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updateHospitalById(id: string, data: IFindHospital): Promise<any> {
    try {
      const hospital = await this.hospitalRepo.findById(id)

      if (!hospital) {
        throwError('Hospital not found', error.notFound)
      }

      const updatedData = await this.hospitalRepo.updateHospitalById(id, data);
      return {
        message: 'Hospital Updated Successfully',
        data: updatedData
      }
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  };

  public async deleteHospitalById( id: string): Promise<any> {
  try{
    const hospital = await this.hospitalRepo.findById(id)

    if (!hospital) {
      throwError('Hospital not found', error.badRequest)
    }

    await this.hospitalRepo.deleteHospital(id)
    return {
      message: 'Hospital Deleted Successfully',
      data: null
    }
  } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractedHospitalData(data: any) {
    const contacts = this.contactRepo.extractContactData(data);
    const hospital = this.hospitalRepo.extractHospitalData(data);
    const locations = this.locationRepo.extractLocationData(data);
    const personnels = this.personnelRepo.extractPersonnelData(data);
    const services = this.serviceRepo.extractServiceData(data);
    const statuses = this.statusRepo.extractStatusData(data);

    return {
        ...hospital,
        statuses,
        contacts,
        personnels,
        locations,
        services,
    };
  }

}
