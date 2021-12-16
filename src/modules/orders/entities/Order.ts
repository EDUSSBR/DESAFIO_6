import {
    Column,
    Entity,
    JoinTable,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

import { User } from '../../users/entities/User';
import { Game } from '../../games/entities/Game';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(()=> Game)
    @JoinTable()
    game: Game

    @OneToOne(()=> User)
    @JoinTable()
    user: User

    @Column()
    quantity: number

    @Column()
    totalPrice: number

    @Column()
    created_at: Date

}