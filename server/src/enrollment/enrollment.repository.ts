/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { EnrollmentToDBDto } from './dto/enrollment.db.dto'
import { EnrollmentEnum } from '../enums'
@Injectable()
export class EnrollmentRepository {
  private readonly MAX_CREDIT = 30
  constructor(private prisma: PrismaService) {}

  async create(data: EnrollmentToDBDto, creditOfSubject?: number) {
    const hasEnoughCredit = await this.checkSumOfCredit(
      data.student_id,
      creditOfSubject,
    )
    if (!hasEnoughCredit) {
      //pass
      console.log('over credit limit of student')
      return false
    }

    const existingEnrollment = await this.prisma.enrollment.findFirst({
      where: {
        student_id: data.student_id,
        class_id: data.class_id,
      },
    })

    if (existingEnrollment) {
      console.log('student already enrolled in this class')
      return false
    }

    const rs = await this.prisma.enrollment.create({
      data: {
        student_id: data.student_id,
        class_id: data.class_id,
        status: EnrollmentEnum.PENDING,
      },
    })
    return rs
  }

  private async checkSumOfCredit(studentId: number, creditOfSubject: number) {
    const rs = await this.prisma.enrollment.findMany({
      where: {
        student_id: studentId,
        status: EnrollmentEnum.PENDING,
      },
      select: {
        class: {
          select: {
            subject: {
              select: {
                credits: true,
              },
            },
          },
        },
      },
    })
    const creditsList = rs.map((item) => item.class.subject.credits)
    const sumOfCredit = creditsList.reduce((sum, item) => {
      return sum + item
    }, 0)
    if (sumOfCredit + creditOfSubject <= this.MAX_CREDIT) {
      return true
    } else {
      return false
    }
  }
}
