// src/hod/hod.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hod } from './entities/hod.entity';
import { CreateHodDto } from './dto/create-hod.dto';

@Injectable()
export class HodService {
  constructor(
    @InjectRepository(Hod)
    private readonly hodRepository: Repository<Hod>,
  ) {}

  create(createHodtDto: CreateHodDto): Promise<Hod> {
    const hod = this.hodRepository.create(createHodtDto);
    return this.hodRepository.save(hod);
  }

  findAll(): Promise<Hod[]> {
    return this.hodRepository.find();
  }

  findByFaculty(facultyId: number): Promise<Hod> {
    return this.hodRepository.findOne({ where: { faculty: { id: facultyId } } });
  }



  // findByFaculty(facultyId: number): Promise<Hod> {
  //   return this.hodRepository.findOne({ where: { faculty: { id: facultyId } } });
  // }
}
