import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTestimonials1615663086208 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'testimonials',
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
                  name: 'user_image',
                  type: 'varchar',
                  isNullable: true,
                  isUnique: true,
               },
               {
                  name: 'testimonial',
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
      await queryRunner.dropTable('testimonials')
   }
}