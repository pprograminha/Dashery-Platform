import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateDifferentials1614881630221 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'differentials',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'icon',
                  type: 'varchar',
               },
               {
                  name: 'title',
                  type: 'varchar',
               },
               {
                  name: 'description',
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

   public async down(queryRunner: QueryRunner): Promise<void> {}
}
