// photo-like.model.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PhotoLike extends Document {
  @Prop()
  photoId: string;

  @Prop()
  count: number;
}

export const PhotoLikeSchema = SchemaFactory.createForClass(PhotoLike);
