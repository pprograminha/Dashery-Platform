export default interface ITokenProvider {
  registerToken(payload: string): Promise<string>
}