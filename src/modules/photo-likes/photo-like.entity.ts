import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhotoLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoId: number;

  @Column()
  count: number;
}
