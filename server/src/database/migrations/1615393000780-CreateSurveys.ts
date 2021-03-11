import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSurveys1615393000780 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'surveys',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'title',
                  type: 'varchar',
                  length: '100',
               },
               {
                  name: 'description',
                  type: 'varchar',
                  length: '100',
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
      await queryRunner.dropTable('surveys')
   }
}
