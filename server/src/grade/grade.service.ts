import { Injectable } from '@nestjs/common'
import { CommonService } from '../common/common.service'
import { GradeRepository } from './grade.repository'
import { GradeToDBDto } from './dto/grade.db.dto'
import { UserService } from '../user/user.service'

@Injectable()
export class GradeService {
  constructor(
    private readonly gradeRepository: GradeRepository,
    private readonly commonService: CommonService,
    private readonly studentService: UserService,
  ) {}

  async findAll() {
    const rs = await this.gradeRepository.findAll()
    return rs.map((item) => {
      return this.commonService.deleteField(item, ['grade_id', 'student_id'])
    })
  }

  async uploadGrade(data: GradeToDBDto) {
    const dto = {
      digit_score: data.digit_score,
      letter_score: this.convertDigitToLetter(data.digit_score),
      subjectId: data.subjectId,
      studentId: data.studentId,
    }
    const rs = await this.gradeRepository.uploadGrade(dto)
    if (rs) {
      if (this.commonService.checkDigitScore(data.digit_score)) {
        await this.studentService.updateUser(data.studentId, {
          credit: rs.subject.credits,
        })
        console.log('update credit')
      } else {
        console.log('not update credit')
      }
      return true
    } else {
      return false
    }
  }

  async enrolledSubjects(student_id: number) {
    const rs = await this.gradeRepository.getEnrolledSubjects(student_id)
    return rs
  }

  private convertDigitToLetter(digit: number) {
    if (digit >= 9) {
      return 'A+'
    } else if (digit >= 8.5) {
      return 'A'
    } else if (digit >= 8) {
      return 'B+'
    } else if (digit >= 7) {
      return 'B'
    } else if (digit >= 6) {
      return 'C+'
    } else if (digit >= 5.5) {
      return 'C'
    } else if (digit >= 5) {
      return 'D+'
    } else if (digit >= 4) {
      return 'D'
    }
    return 'F'
  }
}
