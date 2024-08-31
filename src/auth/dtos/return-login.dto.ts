import { ReturnUserDTO } from 'src/user/dtos/return-user.dto';

export interface ReturnLogin {
  user: ReturnUserDTO;
  accessToken: string;
}
