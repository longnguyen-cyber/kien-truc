import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'
import { SessionEnum } from '../../enums'

export class CreateScheduleDto {
  @ApiProperty({
    example: '2021-10-10',
    description: 'date',
  })
  @IsNotEmpty()
  time: Date

  @ApiProperty({
    example: 'morning',
    description: 'is morning',
  })
  @IsNotEmpty()
  session: string

  @ApiProperty({
    example: 1,

    description: 'quantity lesson',
  })
  @IsNotEmpty()
  shift: number
}
