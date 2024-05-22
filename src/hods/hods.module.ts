import { Module } from '@nestjs/common';
import { HodService } from './hods.service';
import { HodController } from './hods.controller';
import { Hod } from './entities/hod.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hod, Faculty])],

  controllers: [HodController],
  providers: [HodService],
})
export class HodsModule {}
