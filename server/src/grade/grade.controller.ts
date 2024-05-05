import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { GradeService } from './grade.service'
import { AuthGuard } from '../auth/guard/auth.guard'
import { GradeToDBDto } from './dto/grade.db.dto'

@Controller('grades')
@ApiTags('grades')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    const rs = await this.gradeService.findAll()
    if (rs) {
      return {
        status: HttpStatus.OK,
        data: rs,
      }
    } else {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'No data found',
      }
    }
  }

  @Post()
  @UseGuards(AuthGuard)
  async uploadGrade(@Body() data: GradeToDBDto) {
    const rs = this.gradeService.uploadGrade(data)
    if (rs) {
      return {
        status: HttpStatus.CREATED,
        message: 'Upload success',
      }
    } else {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Upload fail',
      }
    }
  }
}
