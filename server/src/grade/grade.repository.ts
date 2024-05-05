/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { GradeToDBDto } from './dto/grade.db.dto'
@Injectable()
export class GradeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.grade.findMany({
      include: {
        subject: true,
      },
    })
  }

  async uploadGrade(data: GradeToDBDto) {
    const rs = await this.prisma.grade.create({
      data: {
        digit_score: data.digit_score,
        letter_score: data.letter_score,
        subject_id: data.subjectId,
        student_id: data.studentId,
      },
      include: {
        subject: true,
      },
    })
    return rs
  }

  async getEnrolledSubjects(studentId: number) {
    const enrolledSubjects = await this.prisma.grade.findMany({
      where: {
        student_id: studentId,
      },
      select: {
        subject_id: true,
        digit_score: true,
      },
    })
    return enrolledSubjects
  }
}
