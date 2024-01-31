import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoLike } from './photo-like.entity';
import { PhotoLikeService } from './photo-likes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotoLike]),
  ],
  providers: [PhotoLikeService],
  exports: [PhotoLikeService], // Exporte o serviço, se necessário
})
export class PhotoLikeModule {}
