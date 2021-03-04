import { EntityRepository, Repository } from "typeorm";
import { Deposition } from "./../models/Deposition";

@EntityRepository(Deposition)
export class DepositionRepository extends Repository<Deposition> {}
