import { Request, Response } from 'express'
import TeamMembersRepository from '../../typeorm/repositories/TeamMembersRepository'
import { getCustomRepository } from 'typeorm'

export default class DestroyTeamMemberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const teamMembersRepository = getCustomRepository(TeamMembersRepository)

    const teamMember = await teamMembersRepository.findById(id)

    if (!teamMember) return response.status(400).json({ msg: 'not found' })

    await teamMembersRepository.destroyById(id)

    return response.status(200).json(teamMember)
  }
}
