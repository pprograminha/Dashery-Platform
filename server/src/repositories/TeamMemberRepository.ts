import { EntityRepository, Repository } from 'typeorm'
import { TeamMember } from './../models/TeamMember'

@EntityRepository(TeamMember)
export class TeamMemberRepository extends Repository<TeamMember> {}
