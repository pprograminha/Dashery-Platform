import { Repository, EntityRepository } from 'typeorm'
import { Differential } from '../models/Differential'

@EntityRepository(Differential)
export class DifferentialRepository extends Repository<Differential> {}
