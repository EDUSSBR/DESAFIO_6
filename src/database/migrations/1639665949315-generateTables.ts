import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class generateTables1639665949315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "users_games_games" DROP CONSTRAINT "FK_934b0d8f9d0084c97d3876ad32d"',
          );
          await queryRunner.query(
            'ALTER TABLE "users_games_games" DROP CONSTRAINT "FK_e5263d029d8644de829aae5c35a"',
          );
          await queryRunner.query('DROP INDEX "IDX_934b0d8f9d0084c97d3876ad32"');
          await queryRunner.query('DROP INDEX "IDX_e5263d029d8644de829aae5c35"');
          await queryRunner.query('DROP TABLE "users_games_games"');
          await queryRunner.query('DROP TABLE "games"');
          await queryRunner.query('DROP TABLE "users"');
                await queryRunner.createTable(new Table({
                      name: 'games',
                      columns: [
                        {
                          name: 'id',
                          type: 'uuid',
                          isPrimary: true
                        },
                        {
                          name: 'title',
                          type: 'varchar'
                        }, {
                          name: 'users',
                          type: 'varchar'
                        },
                        {
                          name: 'genre',
                          type: 'varchar',
                        },
                        {
                          name: 'price',
                          type: 'numeric',
                        },
                        {
                          name: 'created_at',
                          type: 'timestamp',
                          default: 'now()'
                        },
                        {
                          name: 'updated_at',
                          type: 'timestamp',
                          default: 'now()'
                        }
                      ]
                    }
                    )
                  )
                  await queryRunner.createTable(new Table({
                    name: 'orders',
                    columns: [
                      {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                      },
                      {
                        name: 'game',
                        type: 'varchar'
                      }, {
                        name: 'user',
                        type: 'varchar'
                      },
                      {
                        name: 'quantity',
                        type: 'varchar',
                      },
                      {
                        name: 'totalPrice',
                        type: 'varchar',
                      },
                      {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                      }
                    ]
                  }
                  )
                )
                await queryRunner.createTable(new Table({
                    name: 'users',
                    columns: [
                      {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                      },
                      {
                        name: 'first_name',
                        type: 'varchar'
                      }, {
                        name: 'last_name',
                        type: 'varchar'
                      },
                      {
                        name: 'email',
                        type: 'varchar',
                      },
                      {
                        name: 'games',
                        type: 'varchar',
                      },
                      {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                      }
                    ]
                  }
                  )
                )
                await queryRunner.createTable(new Table({
                    name: 'genres',
                    columns: [
                      {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                      },
                      {
                        name: 'type',
                        type: 'varchar'
                      }, {
                        name: 'game',
                        type: 'varchar'
                      }
                    ]
                  }
                  )
                )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('games')
        await queryRunner.dropTable('orders')
        await queryRunner.dropTable('users')
        await queryRunner.dropTable('genres')
    }

}
