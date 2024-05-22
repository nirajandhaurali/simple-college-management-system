// src/faculty/faculty.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Hod } from 'src/hods/entities/hod.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column({name:'hod_id'})
  // hodId:number;

  @OneToMany(() => Student, student => student.faculty)
  students: Student[];

  // @OneToOne(() => Hod, hod => hod.faculty)
  // @JoinColumn()
  // hod: Hod;

  @OneToOne(()=> Hod,(hod)=> hod.faculty)
  //@JoinColumn({name:'hod_id'})
  hod: Hod;
}

