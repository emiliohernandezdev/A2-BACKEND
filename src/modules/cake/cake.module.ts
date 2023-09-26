import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cake } from './cake.entity';
import { CakeService } from './cake.service';
import { CakeController } from './cake.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cake])
    ],
    providers: [
        CakeService
    ],
    controllers: [
        CakeController
    ]
})
export class CakeModule {}
