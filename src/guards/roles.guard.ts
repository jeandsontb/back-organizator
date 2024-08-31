import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { LoginPayload } from 'src/auth/dtos/login-payload.dto';
import { ROLES_KEY } from 'src/decorators/roles-decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const { authorization } = context.switchToHttp().getRequest().headers;
    const authorizationToken = authorization.split(' ')[1];

    const loginPayload: LoginPayload | undefined = await this.jwtService
      .verifyAsync(authorizationToken, {
        secret:
          '00e4a5c4c7b9fe11cd14b02ab0188b596841b3c21ad94159faa4562b7fce753c',
      })
      .catch(() => undefined);

    if (loginPayload === undefined) {
      return false;
    }

    return requiredRoles.some((role) => role === loginPayload.typeUser);
  }
}
