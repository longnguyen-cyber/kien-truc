import { ApiProperty } from '@nestjs/swagger'
import { GradeCreateDto } from './grade.create.dto'

export class GradeToDBDto extends GradeCreateDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the subject',
  })
  subjectId: number

  @ApiProperty({
    example: 1,
    description: 'The id of the student',
  })
  studentId: number
}
