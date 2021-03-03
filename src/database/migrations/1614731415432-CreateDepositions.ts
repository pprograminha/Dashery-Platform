import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateDepositions1614731415432 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'depositions',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'username',
                  type: 'varchar',
               },
               {
                  name: 'deposition',
                  type: 'text',
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('depositions')
   }
}
