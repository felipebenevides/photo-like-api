import { Controller, Get, Post, Delete, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiParam, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { PhotoLikeService } from './photo-likes.service';

@ApiTags('photo-likes')
@Controller('photo-likes')
export class PhotoLikesController {
  constructor(private readonly photoLikesService: PhotoLikeService) {}

  @Post(':photoId/like')
  @ApiParam({ name: 'photoId', type: 'number' })
  @ApiResponse({ status: 201, description: 'Photo liked successfully' })
  @ApiBadRequestResponse({ description: 'Failed to like photo' })
  async likePhoto(@Param('photoId') photoId: number) {
    try {
      await this.photoLikesService.likePhoto(photoId);
      return { message: 'Photo liked successfully' };
    } catch (error) {
      throw new BadRequestException('Failed to like photo');
    }
  }

  @Delete(':photoId/like')
  @ApiParam({ name: 'photoId', type: 'number' })
  @ApiResponse({ status: 200, description: 'Photo unliked successfully' })
  @ApiNotFoundResponse({ description: 'Photo not found or already unliked' })
  async unlikePhoto(@Param('photoId') photoId: number) {
    try {
      await this.photoLikesService.unlikePhoto(photoId);
      return { message: 'Photo unliked successfully' };
    } catch (error) {
      throw new NotFoundException('Photo not found or already unliked');
    }
  }

  @Get(':photoId/like/count')
  @ApiParam({ name: 'photoId', type: 'number' })
  @ApiResponse({ status: 200, description: 'Retrieved like count successfully' })
  @ApiNotFoundResponse({ description: 'Photo not found' })
  async getLikeCountByPhotoId(@Param('photoId') photoId: number) {
    try {
      const likeCount = await this.photoLikesService.getLikeCountsByPhotoId(photoId);
      return { count: likeCount };
    } catch (error) {
      throw new NotFoundException('Photo not found');
    }
  }
}
