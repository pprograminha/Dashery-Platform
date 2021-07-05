import { inject, injectable } from 'tsyringe'
import AppError from '../../../shared/errors/AppError';
import IUser from '../domain/entities/IUser';
import IUsersRepository from "../domain/repositories/IUsersRepository";
import ICreateUserRequestDTO from '../dtos/ICreateUserRequestDTO';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import ITokenProvider from '../providers/TokenProvider/models/ITokenProvider';

interface IResponse {
  user: IUser,
  token: string
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) { }

  async execute({
    email,
    role = 'default',
    firstname,
    lastname,
    password
  }: ICreateUserRequestDTO): Promise<IResponse> {
    const checkIfTheEmailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (checkIfTheEmailAlreadyExists) throw new AppError('This email already exists', 2)

    const username = `@user${Date.now()}`

    const user = await this.usersRepository.create({
      email,
      firstname,
      lastname,
      username,
      role,
      password: await this.hashProvider.generateHash(password)
    })

    const token = await this.tokenProvider.registerToken(user.id)


    return {
      user,
      token,
    }
  }
}