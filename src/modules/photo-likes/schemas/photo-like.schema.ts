import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhotoLikeDocument = PhotoLike & Document;

@Schema()
export class PhotoLike {
  @Prop({ required: true })
  photoId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PhotoLikeSchema = SchemaFactory.createForClass(PhotoLike);
