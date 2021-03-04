import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTeammembers1614888587929 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'teammembers',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'member_image',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'title',
                  type: 'varchar',
               },
               {
                  name: 'description_one',
                  type: 'text',
               },
               {
                  name: 'description_two',
                  type: 'text',
                  isNullable: true,
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
      await queryRunner.dropTable('teammembers')
   }
}
