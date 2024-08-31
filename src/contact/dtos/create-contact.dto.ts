import { IsString } from 'class-validator';

export class CreateContactDTO {
  userId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsString()
  date_birth: string;

  @IsString()
  address: string;

  @IsString()
  email: string;
}
