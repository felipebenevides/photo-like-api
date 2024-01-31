// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Simule a validação de usuário (consulta ao banco de dados em memória)
    const users = [
      { id: 1, username: 'felipe', password: '12345' }, // Senha: password1
      { id: 2, username: 'fulano', password: 'fulano123' }, // Senha: password2
      { id: 3, username: 'user2', password: '$2a$10$lKpkK5WkTr5DYNGdLKyM2unRSh7hE6D0POkKX4kGjQQ5fqNkD/OQO' }, // Senha: password2

    ];

    const user = users.find(user => user.username === username);

    var teste = await bcrypt.compare(password, user.password);

    if (user ) {
      // Retorna o usuário sem a senha
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), // Gera o token JWT
    };
  }
}
