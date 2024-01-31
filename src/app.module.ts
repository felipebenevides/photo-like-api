import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { LocalStrategy } from './modules/auth/local.strategy';
import {  } from "module";
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PhotoLikesController } from './modules/photo-likes/photo-likes.controller';
import { PhotoLikeModule } from './modules/photo-likes/photo-likes.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [
    PhotoLikeModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController,AuthController,PhotoLikesController],
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
