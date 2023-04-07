import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680569434249 implements MigrationInterface {
    name = 'default1680569434249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`articles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`author\` text NOT NULL, \`content\` text NOT NULL, \`date\` date NOT NULL, \`category\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`articles\``);
    }

}
