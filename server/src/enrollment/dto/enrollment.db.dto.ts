import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class EnrollmentToDBDto {
  @ApiProperty({
    example: 234433,
    description: 'id of the class when create the enrollment',
  })
  @IsNumber()
  @IsNotEmpty()
  class_id: number

  student_id: number
}
