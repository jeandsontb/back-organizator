import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entity/user.entity';
import { LoginDTO } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnLogin } from './dtos/return-login.dto';
import { ReturnUserDTO } from 'src/user/dtos/return-user.dto';
import { LoginPayload } from './dtos/login-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDTO): Promise<ReturnLogin> {
    if (!loginDto) {
      throw new NotFoundException('Dados de email não válidos');
    }

    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    if (user === undefined) {
      throw new NotFoundException('Email or password invalid');
    }

    const isMatch = await compare(loginDto.password, user?.password);

    if (!isMatch) {
      throw new NotFoundException('Email or password invalid');
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDTO(user),
    };
  }
}
