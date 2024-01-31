import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoLike } from './photo-like.entity';

@Injectable()
export class PhotoLikeService {
  constructor(
    @InjectRepository(PhotoLike)
    private readonly photoLikeRepository: Repository<PhotoLike>,
  ) {}

  async likePhoto(photoId: number) {
    let existingLike = await this.photoLikeRepository.findOne({ where: { photoId } });
    if (existingLike) {
      existingLike.count += 1;
    } else {
      existingLike = new PhotoLike();
      existingLike.photoId = photoId;
      existingLike.count = 1;
    }
    return this.photoLikeRepository.save(existingLike);
  }

  async unlikePhoto(photoId: number) {
    const existingLike = await this.photoLikeRepository.findOne({ where: { photoId } });
    if (existingLike) {
      if (existingLike.count > 0) {
        existingLike.count -= 1;
        await this.photoLikeRepository.save(existingLike);
      } else {
        await this.photoLikeRepository.remove(existingLike);
      }
    }
  }

  async getLikeCountsByPhotoId(photoId: number) {
    const existingLike = await this.photoLikeRepository.findOne({ where: { photoId } });
    return existingLike ? existingLike.count : 0;
  }
}
