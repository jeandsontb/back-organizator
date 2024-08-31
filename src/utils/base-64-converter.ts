import { BadRequestException } from '@nestjs/common';
import { LoginPayload } from 'src/auth/dtos/login-payload.dto';

// FUNÇÃO PARA ELE FICAR PEGANDO O ID SEM PRECISAR PASSAR NA ROTA, ELE JÁ PEGA AUTOMÁTICO
export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayload => {
  if (!authorization) {
    throw new BadRequestException('Does not permission');
  }

  const authorizationSplited = authorization.split('.');

  if (authorizationSplited.length < 3 || !authorizationSplited[1]) {
    return undefined;
  }

  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
};
