import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CakeModule } from './modules/cake/cake.module';
import { Cake } from './modules/cake/cake.entity';
import { Order } from './modules/order/order.entity';
import { OrderModule } from './modules/order/order.module';
import { FamilyModule } from './modules/family/family.module';
import { CakefamilyModule } from './modules/cakefamily/cakefamily.module';

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
        host: "localhost",
        port: 1433,
        database: cfg.get<string>("DB_NAME"),
        username: cfg.get<string>("DB_USER"),
        password: cfg.get<string>("DB_PASS"),
        entities: [
          Cake,
          Order
        ],
        options: {
          encrypt: false,
          trustServerCertificate: true,
          useUTC: true,
          instanceName: "DEVELOP"
        }
      }),
      inject: [ConfigService]
    }),
    CakeModule,
    OrderModule,
    FamilyModule,
    CakefamilyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
