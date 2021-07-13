import FakeRefreshTokenRepository from '../../refresh-token/domain/repositories/fakes/FakeRefreshTokenRepository'
import FakeUsersRepository from '../../users/infra/typeorm/repositories/fakes/FakeUsersRepository'
import GenerateRefreshTokenService from '../../refresh-token/services/GenerateRefreshTokenService'
import AppError from '../../../shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let fakeRefreshTokenRepository: FakeRefreshTokenRepository

let generateRefreshToken: GenerateRefreshTokenService

describe('GenerateRefreshToken', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeRefreshTokenRepository = new FakeRefreshTokenRepository()

    generateRefreshToken = new GenerateRefreshTokenService(
      fakeRefreshTokenRepository,
      fakeUsersRepository
    )
  })
  it('should be able to generate a refresh token', async () => {
    const user = await fakeUsersRepository.create({
      email: 'xxxxx@xxxxx.xxx',
      firstname: 'Xxxxx',
      lastname: 'Xxxx Xxxx',
      password: '00000000',
      username: 'Xxxxx'
    })

    const refreshToken = await generateRefreshToken.execute(user.id)

    expect(refreshToken).toHaveProperty('id')
    expect(refreshToken.user_id).toEqual(user.id)
  })

  it('should not be able to generate a refresh token with non-existent user', async () => {
    await expect(
      generateRefreshToken.execute('non-existing-user')
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to delete the refresh token if another one already exists', async () => {
    const user = await fakeUsersRepository.create({
      email: 'xxxxx@xxxxx.xxx',
      firstname: 'Xxxxx',
      lastname: 'Xxxx Xxxx',
      password: '00000000',
      username: 'Xxxxx'
    })
    const destroyByRefreshToken = jest.spyOn(fakeRefreshTokenRepository, 'destroyByRefreshToken')

    const refreshTokenThatWillbeDeleted = await generateRefreshToken.execute(user.id)
    await generateRefreshToken.execute(user.id)

    expect(destroyByRefreshToken).toHaveBeenCalledWith(refreshTokenThatWillbeDeleted)

  })


})