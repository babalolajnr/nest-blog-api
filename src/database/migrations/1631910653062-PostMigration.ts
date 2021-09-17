import {MigrationInterface, QueryRunner} from "typeorm";

export class PostMigration1631910653062 implements MigrationInterface {
    name = 'PostMigration1631910653062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nest_blog\`.\`post\` ADD \`likes\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nest_blog\`.\`post\` DROP COLUMN \`likes\``);
    }

}
