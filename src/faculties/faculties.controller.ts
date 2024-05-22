// src/faculty/faculty.controller.ts
import { Controller, Get, Param, Post,Body } from '@nestjs/common';
import { FacultyService } from './faculties.service';
import { CreateCollectionOptions } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';


@Controller('faculties')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  create(@Body() createfacultyDto: CreateFacultyDto) {
    return this.facultyService.create(createfacultyDto);
  }

  @Get()
  findAll() {
    return this.facultyService.findAll();
  }




  @Get(':id/students')
  findStudentsByFaculty(@Param('id') id: number) {
    return this.facultyService.findStudentsByFaculty(id);
  }

  @Get(':id/hod')
  findHodByFaculty(@Param('id') id: number) {
    return this.facultyService.findHodByFaculty(id);
  }
}


