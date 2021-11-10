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

  public async findAll(): Promise<any> {
    const hospitals = await this.hospitalRepo.getAllHospitals()
    return {
      message: 'Hospitals Retrieved Successfully',
      data: hospitals
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
    const hospital = await this.hospitalRepo.findById(id)

    if (!hospital) {
      throwError('Hospital not found', error.badRequest)
    }

    await this.hospitalRepo.deleteHospital(id)
    return {
      message: 'Hospital Deleted Successfully',
      data: null
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
