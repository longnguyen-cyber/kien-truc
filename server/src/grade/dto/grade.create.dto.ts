import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator'

export class GradeCreateDto {
  @ApiProperty({
    example: 10,
    description: 'The digit score of the grade',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  digit_score: number

  @IsNotEmpty()
  letter_score: string
}
