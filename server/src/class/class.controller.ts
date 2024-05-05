import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ClassService } from './class.service'
import { AuthGuard } from '../auth/guard/auth.guard'
import { ClassToDBDto } from './dto/class.db.dto'

@Controller('classes')
@ApiTags('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createClass(@Body() data: ClassToDBDto) {
    const rs = this.classService.createClass(data)
    if (rs) {
      return {
        status: HttpStatus.CREATED,
        message: 'Create success',
      }
    } else {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Create fail',
      }
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllClasses() {
    const rs = await this.classService.getAllClasses()
    return {
      status: HttpStatus.OK,
      message: 'Get all subjects success',
      data: rs,
    }
  }
}
