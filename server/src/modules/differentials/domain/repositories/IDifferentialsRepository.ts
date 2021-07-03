import ICreateDifferentialDTO from "../../dtos/ICreateDifferentialDTO";
import IDifferential from "../entities/IDifferential";

export default interface IDifferentialsRepository {
   destroyById(differential_id: string): Promise<void>
   listById(differential_id: string): Promise<IDifferential | undefined>
   listAllDifferentials(): Promise<IDifferential[]>
   save(differential: IDifferential): Promise<void>
   create(diffentialData: ICreateDifferentialDTO): Promise<IDifferential>
}
