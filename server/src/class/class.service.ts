import { Injectable } from '@nestjs/common'
import { CommonService } from '../common/common.service'
import { ClassRepository } from './class.repository'
import { ClassToDBDto } from './dto/class.db.dto'
import { SubjectService } from '../subject/subject.service'
import { GradeService } from '../grade/grade.service'

@Injectable()
export class ClassService {
  constructor(
    private readonly classRepository: ClassRepository,
    private readonly commonService: CommonService,
    private readonly subjectService: SubjectService,
    private readonly gradeService: GradeService,
  ) {}

  async createClass(data: ClassToDBDto) {
    const rs = await this.classRepository.create(data)
    return rs
  }

  async getAllClasses() {
    const rs = await this.classRepository.getAll()
    return rs.map((item) => {
      return this.commonService.deleteField(item, ['subject_id'])
    })
  }

  async checkCapacityOfClass(classId: number) {
    const rs = await this.classRepository.checkCapacityOfClass(classId)
    return rs
  }

  async getClassById(classId: number) {
    const rs = await this.classRepository.getClassById(classId) //classRegistion
    return rs
  }

  async checkPrerequisite(classId: number, studentId: number) {
    const classRegistion = await this.classRepository.getClassById(classId)
    const subjectOfClass = classRegistion.subject

    const subject = await this.subjectService.getSubjectById(
      subjectOfClass.subject_id,
    )

    const prerequisites = subject.prerequisites

    const enrolledSubjects = await this.gradeService.enrolledSubjects(studentId)

    const hasEnrolledInAllPrerequisites = prerequisites.every((prerequisite) =>
      enrolledSubjects.some(
        (enrolledSubject) =>
          enrolledSubject.subject_id === prerequisite.prerequisite_subject_id &&
          this.commonService.checkDigitScore(enrolledSubject.digit_score),
      ),
    )

    return hasEnrolledInAllPrerequisites
  }
}
