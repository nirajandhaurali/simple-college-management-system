// src/faculty/faculty.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';
import { Student } from 'src/students/entities/student.entity';
import { Hod } from 'src/hods/entities/hod.entity';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Hod)
    private readonly hodRepository: Repository<Hod>,
  ) {}

  async create(createvacultyDto: CreateFacultyDto) {
    const faculty=this.facultyRepository.create(createvacultyDto);
    return await this.facultyRepository.save(faculty) ;
  }

  async findAll(){
    return await this.facultyRepository.find({
      relations:{
        hod:true,
        students:true,
      }
    })
  }

  // findAll(): Promise<Faculty[]> {
  //   return this.facultyRepository.find();
  // }


  findHodByFaculty(facultyId: number): Promise<Hod> {
    return this.hodRepository.findOne({ where: { faculty: { id: facultyId } } });
  }


  findStudentsByFaculty(facultyId: number) {
    return this.studentRepository.findOne({ where: { faculty: { id: facultyId } } });
  }
}
