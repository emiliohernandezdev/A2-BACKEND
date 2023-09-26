import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CakeModule } from './modules/cake/cake.module';
import { Cake } from './modules/cake/cake.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => ({
        type: 'mssql',
        host: `${cfg.get<string>('DB_SERVER')}\\${cfg.get<string>('DB_INSTANCE')}`,
        port: 1433,
        username: cfg.get<string>('DB_USER'),
        password: cfg.get<string>('DB_PASS'),
        database: 'ANALISIS2',
        entities: [
          Cake
        ],
        options: {
          encrypt: false,
        }
      }),
      inject: [ConfigService]
    }),
    CakeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
