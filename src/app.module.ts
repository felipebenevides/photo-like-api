import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { LocalStrategy } from './auth/local.strategy';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController,AuthController],
  providers: [AppService, AuthService, LocalStrategy],
})

export class AppModule {
  // constructor() {
  //   const options = new DocumentBuilder()
  //     .setTitle('API Documentation')
  //     .setDescription('API Documentation using Swagger')
  //     .setVersion('1.0')
  //     .build();
  //   const document = SwaggerModule.createDocument(options);
  //   SwaggerModule.setup('api', document);
  // }
}
