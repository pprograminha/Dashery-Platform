export default interface IRefreshToken {
  id: string;
  expires_in: number;
  user_id: string;
  updated_at: Date;
  created_at: Date;
}