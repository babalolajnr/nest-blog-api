import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTimestamps1643476943777 implements MigrationInterface {
    name = 'AddTimestamps1643476943777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "created_on" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_on" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "created_on" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated_on" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated_on"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_on"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_on"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_on"`);
    }

}
