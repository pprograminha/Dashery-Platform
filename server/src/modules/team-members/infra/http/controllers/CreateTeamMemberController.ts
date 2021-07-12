import { Request, Response } from 'express'
import TeamMembersRepository from '../../typeorm/repositories/TeamMembersRepository'
import { getCustomRepository } from 'typeorm'

export default class CreateTeamMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body

    const teamMembersRepository = getCustomRepository(TeamMembersRepository)

    try {
      const teamMember = await teamMembersRepository.create({ title, description })

      return response.status(201).json(teamMember)
    } catch (error) {
      return response.status(400).json({ msg: error })
    }
  }
}
