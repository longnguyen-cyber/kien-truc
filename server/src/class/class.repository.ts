/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ClassToDBDto } from './dto/class.db.dto'
@Injectable()
export class ClassRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ClassToDBDto) {
    return await this.prisma.class.create({
      data,
    })
  }

  async getAll() {
    const rs = await this.prisma.class.findMany({
      include: {
        subject: true,
      },
    })

    return rs
  }
  async checkCapacityOfClass(classId: number) {
    const rs = await this.prisma.class.findUnique({
      where: {
        class_id: classId,
      },
      select: {
        current_capacity: true,
        max_capacity: true,
      },
    })

    if (rs.current_capacity < rs.max_capacity) {
      return true // class is not full and can be enrolled
    } else {
      return false // class is full and cannot be enrolled
    }
  }

  async getClassById(classId: number) {
    const classRegistion = await this.prisma.class.findUnique({
      where: {
        class_id: classId,
      },
      include: {
        subject: true,
      },
    })

    return classRegistion
  }
}
