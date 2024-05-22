// src/student/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({name:'faculty_id'})
  facultyId:number;

  @ManyToOne(() => Faculty, faculty => faculty.students)
  @JoinColumn({name:'faculty_id'})
  faculty: Faculty;
}
