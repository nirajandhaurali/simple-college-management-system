import { Module } from '@nestjs/common';
import { FacultyService } from './faculties.service';
import { FacultyController } from './faculties.controller';
import { Faculty } from './entities/faculty.entity';
import { Student } from 'src/students/entities/student.entity';
import { Hod } from 'src/hods/entities/hod.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty, Student, Hod])],
  controllers: [FacultyController],
  providers: [FacultyService],
})
export class FacultiesModule {}
