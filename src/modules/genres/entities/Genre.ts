import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  import { Game } from '../../games/entities/Game';

  @Entity('genres')
  export class Genre {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    type: string

    @OneToMany(
        () => Game,
        game => game.genre
    )
    game: Game[]
    
  }