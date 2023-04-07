import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680609885443 implements MigrationInterface {
    name = 'default1680609885443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`articles\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`articles\` ADD \`date\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`articles\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`articles\` ADD \`date\` date NOT NULL`);
    }

}
