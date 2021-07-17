import ICreateDifferentialDTO from "../../../differentials/dtos/ICreateDifferentialDTO";
import ITeamMember from "../entities/ITeamMember";

export default interface ITeamMembersRepository {
  destroyById(team_member_id: string): Promise<void>
  findById(team_member_id: string): Promise<ITeamMember | undefined>
  findAllTeamMembers(): Promise<ITeamMember[]>
  save(team_member: ITeamMember): Promise<void>
  create(team_member_data: ICreateDifferentialDTO): Promise<ITeamMember>
}
