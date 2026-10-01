import type { MigrationInterface, QueryRunner } from 'typeorm';
export class InitialExtensionsMigration1700000000000 implements MigrationInterface {
  name = 'InitialExtensionsMigration1700000000000';
  async up(queryRunner: QueryRunner): Promise<void> { await queryRunner.query('CREATE EXTENSION IF NOT EXISTS citext'); await queryRunner.query('CREATE EXTENSION IF NOT EXISTS btree_gist'); }
  async down(queryRunner: QueryRunner): Promise<void> { await queryRunner.query('DROP EXTENSION IF EXISTS btree_gist'); await queryRunner.query('DROP EXTENSION IF EXISTS citext'); }
}
