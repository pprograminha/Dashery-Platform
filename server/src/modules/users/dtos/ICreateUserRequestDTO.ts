export default interface ICreateUserRequestDTO {
  firstname: string
  lastname: string
  email: string
  role?: string
  password: string
}