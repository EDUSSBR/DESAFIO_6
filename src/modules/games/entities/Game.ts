import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../../genres/entities/Genre';

import { User } from '../../users/entities/User';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => User, (user) => user.games)
  users: User[];

  @ManyToOne(
    ()=> Genre,
    genre => genre.game
  )
  genre: Genre

  @CreateDateColumn()
  created_at: Date;

  @Column()
  price: number

  @UpdateDateColumn()
  updated_at: Date;
}
