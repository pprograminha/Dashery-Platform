import { EntityRepository, Repository } from 'typeorm'
import { TeamMembers } from './../models/TeamMembers'

@EntityRepository(TeamMembers)
export class TeamMembersRepository extends Repository<TeamMembers> {}
