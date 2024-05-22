// src/hod/hod.controller.ts
import { Controller, Get, Param,Post,Body } from '@nestjs/common';
import { HodService } from './hods.service';
import { CreateHodDto } from './dto/create-hod.dto';

@Controller('hods')
export class HodController {
  constructor(private readonly hodService: HodService) {}

  @Post()
  create(@Body() createhodDto: CreateHodDto) {
    return this.hodService.create(createhodDto);
  }

  @Get()
  findAll() {
    return this.hodService.findAll();
  }

  @Get('faculty/:facultyId')
  findByFaculty(@Param('facultyId') facultyId: number) {
    return this.hodService.findByFaculty(facultyId);
  }

  
}
