import ICreateDifferentialDTO from "../../dtos/ICreateDifferentialDTO";
import IDifferential from "../entities/IDifferential";

export default interface IDifferentialsRepository {
  destroyById(differential_id: string): Promise<void>
  findById(differential_id: string): Promise<IDifferential | undefined>
  findAllDifferentials(): Promise<IDifferential[]>
  save(differential: IDifferential): Promise<void>
  create(differential_data: ICreateDifferentialDTO): Promise<IDifferential>
}
