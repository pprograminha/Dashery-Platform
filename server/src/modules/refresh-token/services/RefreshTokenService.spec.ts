import FakeRefreshTokenRepository from '../../refresh-token/domain/repositories/fakes/FakeRefreshTokenRepository'
import FakeUsersRepository from '../../users/infra/typeorm/repositories/fakes/FakeUsersRepository'
import RefreshTokenService from '../../refresh-token/services/RefreshTokenService'
import AppError from '../../../shared/errors/AppError'
import FakeTokenProvider from '../../users/providers/TokenProvider/fakes/FakeTokenProvider'
import { addDays, getUnixTime } from 'date-fns'

let fakeUsersRepository: FakeUsersRepository
let fakeRefreshTokenRepository: FakeRefreshTokenRepository
let fakeTokenProvider: FakeTokenProvider

let refreshToken: RefreshTokenService

describe('RefreshToken', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeRefreshTokenRepository = new FakeRefreshTokenRepository()
    fakeTokenProvider = new FakeTokenProvider()

    refreshToken = new RefreshTokenService(
      fakeRefreshTokenRepository,
      fakeTokenProvider,
      fakeUsersRepository
    )
  })

  it('should be able refresh token', async () => {
    const { id: refresh_token_id } = await fakeRefreshTokenRepository.generate({
      expires_in: getUnixTime(addDays(new Date(), 1)),
      user_id: 'user-id',
    })

    const { token, refresh_token } = await refreshToken.execute({
      refresh_token_id,
    })

    expect(!!token).toBe(true)
    expect(refresh_token).toBe(undefined)
  })

  it('should throw an error if refresh token is not found', async () => {
    expect(
      refreshToken.execute({ refresh_token_id: 'non-existing-refresh-token-id' })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to generate a new refresh token from the expired refresh token', async () => {
    const { id: refresh_token_id } = await fakeRefreshTokenRepository.generate({
      expires_in: 0,
      user_id: 'user-id',
    })

    jest.spyOn(Date, 'now').mockImplementationOnce(() => new Date(2021, 6, 10).getTime())

    const { token, refresh_token } = await refreshToken.execute({
      refresh_token_id,
    })

    expect(!!token).toBe(true)
    expect(refresh_token).toHaveProperty('id')
  })


})