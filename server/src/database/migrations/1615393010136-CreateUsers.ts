import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1615393010136 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'users',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'firstname',
                  type: 'varchar',
                  length: '100',
               },
               {
                  name: 'lastname',
                  type: 'varchar',
                  length: '100',
               },
               {
                  name: 'email',
                  type: 'varchar',
                  length: '100',
                  isUnique: true,
               },
               {
                  name: 'password',
                  type: 'varchar',
                  length: '100',
               },
               {
                  name: 'secret',
                  type: 'varchar',
                  isNullable: true,
                  isUnique: true,
               },
               {
                  name: 'updated_at',
                  type: 'varchar',
                  default: 'now()',
               },
               {
                  name: 'created_at',
                  type: 'varchar',
                  default: 'now()',
               },
            ],
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users')
   }
}
