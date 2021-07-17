import { Request, Response } from 'express'
import TeamMembersRepository from '../../typeorm/repositories/TeamMembersRepository'
import { getCustomRepository } from 'typeorm'

export default class ListAllTeamMembersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const teamMembersRepository = getCustomRepository(TeamMembersRepository)
    const teamMembers = await teamMembersRepository.findAllTeamMembers()

    return response.status(200).json(teamMembers)
  }
}
