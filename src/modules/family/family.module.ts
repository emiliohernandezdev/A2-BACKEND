import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Family } from './family.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Family])
    ]
})
export class FamilyModule {}
