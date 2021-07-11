import { getRepository, Repository } from 'typeorm'
import ITeamMember from '../../../domain/entities/ITeamMember'
import ITeamMembersRepository from '../../../domain/repositories/ITeamMembersRepository'
import ICreateTeamMemberDTO from '../../../dtos/ICreateTeamMemberDTO'
import TeamMember from '../entities/TeamMember'

export default class TeamMembersRepository implements ITeamMembersRepository {
  private ormRepository: Repository<ITeamMember>

  constructor() {
    this.ormRepository = getRepository(TeamMember)
  }

  async findById(team_member_id: string): Promise<ITeamMember | undefined> {
    const teamMember = await this.ormRepository.findOne({
      where: {
        id: team_member_id
      }
    })

    return teamMember
  }

  async save(team_member: ITeamMember): Promise<void> {
    await this.ormRepository.save(team_member)
  }

  async create({
    description,
    title
  }: ICreateTeamMemberDTO): Promise<ITeamMember> {
    const teamMember = this.ormRepository.create({
      description,
      title
    })
    await this.ormRepository.save(teamMember)

    return teamMember
  }

  async destroyById(team_member_id: string): Promise<void> {
    await this.ormRepository.delete(team_member_id)
  }

  async findAllTeamMembers(): Promise<ITeamMember[]> {
    const teamMembers = await this.ormRepository.find()

    return teamMembers
  }

}
