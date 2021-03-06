import { Request, Response } from 'express'
import { TeamMemberRepository } from '../repositories/TeamMemberRepository'
import { getCustomRepository } from 'typeorm'
import { TeamMember } from './../models/TeamMember'

export class TeamMemberController {
   async show(req: Request, res: Response) {
      const teamMemberRepository = getCustomRepository(TeamMemberRepository)
      const teamMembers = await teamMemberRepository.find()

      res.status(200).send(teamMembers)
   }
   async create(req: Request, res: Response) {
      const { title, description_one } = <TeamMember>req.body
      const teamMemberRepository = getCustomRepository(TeamMemberRepository)
      teamMemberRepository.create({ title, description_one })
   }
   async destroy(req: Request, res: Response) {}
   async update(req: Request, res: Response) {}
}
