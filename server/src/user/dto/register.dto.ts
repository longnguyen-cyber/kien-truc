import { ApiProperty, OmitType } from '@nestjs/swagger'
import { UserCreateDto } from './userCreate.dto'
import { EducationCreateDto } from './education.dto'

export class RegisterDTO extends OmitType(UserCreateDto, [
  'code',
  'password',
]) {}
