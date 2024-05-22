// src/hod/hod.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Entity()
export class Hod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({name:'faculty_id'})
  facultyId:number;

  @OneToOne(() => Faculty, faculty => faculty.hod)
  @JoinColumn({name:'faculty_id'})
  faculty: Faculty;

  
//   @OneToOne(()=> Faculty,(faculty)=> faculty.hod)
//     faculty: Faculty;
}

