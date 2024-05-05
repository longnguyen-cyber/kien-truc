/* eslint-disable prettier/prettier */

import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CommonService } from '../common/common.service'
import { EnrollmentService } from './enrollment.service'
import { EnrollmentToDBDto } from './dto/enrollment.db.dto'
import { AuthGuard } from '../auth/guard/auth.guard'

@ApiTags('enrollments')
@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() data: EnrollmentToDBDto) {
    const rs = await this.enrollmentService.create(data)
    if (rs) {
      return {
        status: 201,
        message: 'Create success',
      }
    } else {
      return {
        status: 400,
        message: 'Create fail',
      }
    }
  }
}