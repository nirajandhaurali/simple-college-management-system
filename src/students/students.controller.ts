// src/student/student.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { StudentService } from './students.service';
//import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Get('faculty/:facultyId')
  findByFaculty(@Param('facultyId') facultyId: number) {
    return this.studentService.findByFaculty(facultyId);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
  //   return this.citiesService.update(+id, updateCityDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
}
