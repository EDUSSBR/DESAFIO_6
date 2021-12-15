import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return await this.repository
    .createQueryBuilder('games')
    .where(`games.title ILIKE '%${param}%'`)
    .getMany() 
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return await this.repository.query('SELECT COUNT(id) FROM games');
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const users = getRepository(User)
      .createQueryBuilder('users')
      .leftJoin('users.games', 'games')
      .where(`games.id = '${id}'`)
      .getMany()

    return users
  }
}
