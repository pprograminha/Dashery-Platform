import { getRepository, Repository } from 'typeorm'
import IDifferential from '../../../domain/entities/IDifferential'
import IDifferentialsRepository from '../../../domain/repositories/IDifferentialsRepository'
import ICreateDifferentialDTO from '../../../dtos/ICreateDifferentialDTO'
import Differential from '../entities/Differential'

export default class DifferentialsRepository implements IDifferentialsRepository {
  private ormRepository: Repository<Differential>

  constructor() {
    this.ormRepository = getRepository(Differential)
  }

  async findById(differential_id: string): Promise<IDifferential | undefined> {
    const differential = await this.ormRepository.findOne({
      where: {
        id: differential_id
      }
    })

    return differential
  }

  async save(differential: IDifferential): Promise<void> {
    await this.ormRepository.save(differential)
  }

  async create({
    description,
    title
  }: ICreateDifferentialDTO): Promise<IDifferential> {
    const differential = this.ormRepository.create({
      description,
      title
    })
    await this.ormRepository.save(differential)

    return differential
  }

  async destroyById(differential_id: string): Promise<void> {
    await this.ormRepository.delete(differential_id)
  }

  async findAllDifferentials(): Promise<IDifferential[]> {
    const differentials = await this.ormRepository.find()

    return differentials
  }
}
