import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { FacultiesModule } from './faculties/faculties.module';
import { HodsModule } from './hods/hods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';
import { Faculty } from './faculties/entities/faculty.entity';
import { Hod } from './hods/entities/hod.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'university',
      entities: [Student, Faculty, Hod],
      synchronize: true,


    }),
    
    StudentsModule, FacultiesModule, HodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
