import { UserEntity } from '../entity/user.entity';

export class ReturnUserDTO {
  id: number;
  name: string;
  email: string;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
  }
}
