import IUser from "../../../users/domain/entities/IUser";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";

export default interface IUsersRepository {
  destroyById(user_id: string): Promise<void>
  findById(user_id: string): Promise<IUser | undefined>
  findByEmail(email: string): Promise<IUser | undefined>
  findByUsername(username: string): Promise<IUser | undefined>
  findAllUsers(): Promise<IUser[]>
  save(user: IUser): Promise<void>
  create(user_data: ICreateUserDTO): Promise<IUser>
}
