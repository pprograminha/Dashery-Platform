import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRefreshToken1626125803534 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "refresh_token",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "user_id",
          type: "uuid",
          isUnique: true
        },
        {
          name: "expires_in",
          type: "int",
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: "user_id_fk",
          columnNames: ["user_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "users",
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("refresh_token");
  }

}
