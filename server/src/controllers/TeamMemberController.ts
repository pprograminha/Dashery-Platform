import { Request, Response } from 'express'
import { TeamMemberRepository } from '../repositories/TeamMemberRepository'
import { getCustomRepository } from 'typeorm'
import { TeamMember } from './../models/TeamMember'

export class TeamMemberController {
   async show(req: Request, res: Response) {
      const teamMemberRepository = getCustomRepository(TeamMemberRepository)
      const teamMembers = await teamMemberRepository.find()

      return res.status(200).json(teamMembers)
   }
   async create(req: Request, res: Response) {
      const { title, description_one } = <TeamMember>req.body

      const teamMemberRepository = getCustomRepository(TeamMemberRepository)

      try {
         const member = teamMemberRepository.create({ title, description_one })

         await teamMemberRepository.save(member)

         return res.status(201).json(member)
      } catch (error) {
         return res.status(400).json({ msg: error })
      }
   }
   async destroy(req: Request, res: Response) {
      const { id } = req.params
      const teamMemberRepository = getCustomRepository(TeamMemberRepository)

      const member = await teamMemberRepository.findOne(id)
      await teamMemberRepository.delete(id)

      if (!member) return res.status(400).json({ msg: 'not found' })
      return res.status(200).json(member)
   }
   async update(req: Request, res: Response) {
      const { id } = req.params
      const { description_one, description_two, member_image, title } = <
         TeamMember
      >req.body

      const teamMemberRepository = getCustomRepository(TeamMemberRepository)
      const member = await teamMemberRepository.findOne({ id })

      try {
         await teamMemberRepository.update(
            { id },
            { description_one, description_two, member_image, title }
         )
         return res.status(200).json({
            description_one,
            description_two: `${description_two ? description_two : null}`,
            member_image: `${member_image ? member_image : null}`,
            title,
         })
      } catch (error) {
         return res.status(400).json({ msg: error })
      }
   }
}
