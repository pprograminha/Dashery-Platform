import { Repository, EntityRepository } from 'typeorm'
import { Differentials } from '../models/Differentials'

@EntityRepository(Differentials)
export class DifferentialRepository extends Repository<Differentials> {}
