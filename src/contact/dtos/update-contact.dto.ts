import { IsNumber, IsString } from 'class-validator';

export class UpdateContactDTO {
  @IsNumber()
  id: number;

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
