import { ApiProperty } from '@nestjs/swagger'
import { ClassCreateDto } from './class.create.dto'

export class ClassToDBDto extends ClassCreateDto {
  @ApiProperty({
    example: 234433,
    description: 'id of the subject when create the class',
  })
  subject_id: number
}
