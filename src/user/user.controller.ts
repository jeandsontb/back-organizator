import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { ReturnUserDTO } from './dtos/return-user.dto';
import { UserId } from 'src/decorators/user-id-decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDTO[]> {
    return (await this.userService.getAllUser()).map(
      (user) => new ReturnUserDTO(user),
    );
  }

  @Get('/detail')
  async getUser(@UserId() userId: number): Promise<ReturnUserDTO> {
    return await this.userService.findUserById(Number(userId));
  }
}
