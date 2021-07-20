export default class AppError {
  constructor(
    public readonly message: string,
    public readonly type: number = 1,
    public readonly statusCode: number = 400,
  ) { }
}