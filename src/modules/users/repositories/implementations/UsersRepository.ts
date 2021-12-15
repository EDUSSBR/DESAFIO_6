import { getRepository, createQueryBuilder, Repository } from 'typeorm';
import { Game } from '../../../games/entities/Game';
import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.find({ relations: ['games'], where: { id: user_id } })
    return user[0]
    }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return await this.repository.query('SELECT * FROM users ORDER BY first_name');
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return await this.repository.query(`
    SELECT *
    FROM users 
    WHERE lower(first_name) = lower('${first_name}')
    AND lower(last_name) = lower('${last_name}')`); 
  }
}
