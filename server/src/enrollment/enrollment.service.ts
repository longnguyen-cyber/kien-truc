/* eslint-disable @typescript-eslint/no-unused-vars */

import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Cache } from 'cache-manager'
import { CommonService } from '../common/common.service'
import { EnrollmentRepository } from './enrollment.repository'
import { EnrollmentToDBDto } from './dto/enrollment.db.dto'
import { ClassService } from '../class/class.service'
import { SubjectService } from '../subject/subject.service'

@Injectable()
export class EnrollmentService {
  constructor(
    private commonService: CommonService,
    private subjectService: SubjectService,
    private classService: ClassService,
    private enrollmentRepository: EnrollmentRepository,
  ) {}

  async create(data: EnrollmentToDBDto) {
    const isClassFull = await this.classService.checkCapacityOfClass(
      data.class_id,
    )
    if (!isClassFull) {
      //pass
      console.log('class is full')
      return false
    }

    const creditOfSubject = await this.subjectService.currentCreditOfSubject(
      data.class_id,
    )

    const hasPrerequisite = await this.classService.checkPrerequisite(
      data.class_id,
      data.student_id,
    )
    if (!hasPrerequisite) {
      //pass
      console.log('prerequisite not met')
      return false
    }

    return await this.enrollmentRepository.create(data, creditOfSubject)
  }
}
