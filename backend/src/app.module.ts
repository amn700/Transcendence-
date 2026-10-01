import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { InitialExtensionsMigration1700000000000 } from './migrations/1700000000000-initial-extensions.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),
    TypeOrmModule.forRootAsync({ inject: [ConfigService], useFactory: (config: ConfigService) => ({ type: 'postgres' as const, host: config.getOrThrow<string>('POSTGRES_HOST'), port: config.get<number>('POSTGRES_PORT', 5432), username: config.getOrThrow<string>('POSTGRES_USER'), password: config.getOrThrow<string>('POSTGRES_PASSWORD'), database: config.getOrThrow<string>('POSTGRES_DB'), synchronize: false, migrationsRun: true, migrations: [InitialExtensionsMigration1700000000000] }) }),
  ],
  controllers: [AppController], providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
