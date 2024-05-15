/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CACHE_MANAGER,
  HttpStatus,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Cache } from 'cache-manager'
import { AuthService } from '../auth/auth.service'
import { HttpExceptionCustom } from '../common/common.exception'
import { CommonService } from '../common/common.service'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { UserUpdateDto } from './dto/userUpdate.dto'
import { UserCheck } from './user.check'
import { UserRepository } from './user.repository'
import { SubjectService } from '../subject/subject.service'

@Injectable()
export class UserService implements OnModuleInit {
  private readonly EXPIRED = 60 * 60 * 24 * 30 // 30 days
  private readonly PASSWORD_DEFAULT = '111111'
  constructor(
    private authService: AuthService,
    private commonService: CommonService,
    private userRepository: UserRepository,
    private userCheck: UserCheck,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
    private readonly subjectService: SubjectService,
  ) {}
  async onModuleInit() {
    this.updateCacheUser()
  }

  private updateCacheUser = async () => {
    const users = await this.userRepository.findAll()
    this.cacheManager.set('user', JSON.stringify(users), {
      ttl: this.EXPIRED,
    })
  }

  async login({ code, password }: any): Promise<any> {
    const user = await this.checkLoginData(parseInt(code), password)

    const token = this.authService.generateJWT(code)
    await this.cacheManager.set(token, JSON.stringify(user), {
      ttl: this.configService.get<number>('LOGIN_EXPIRED'),
    }) // 30 days
    this.commonService.deleteField(user, ['userId'])
    return {
      ...user,
      token,
    }
  }

  async getUser(code: number) {
    const user = await this.userRepository.getUserCode(code)
    const subjects = await this.subjectService.getAllSubjects(user.student_id)
    const subjectPass = subjects.filter((item: any) => item.status === true)
    console.log('subjectPass', subjectPass)
    const result = this.commonService.deleteField(
      {
        ...user,
        numberSubjectPass: subjectPass.length,
        education: user.education[0],
      },
      ['student_id', 'education_id'],
    )
    return result
  }

  async updateUser(student_id: number, data: UserUpdateDto) {
    const user = await this.userRepository.updateUser(student_id, data)
    return user
  }

  async createUser(data: RegisterDTO): Promise<boolean> {
    const code = await this.generateStudentCode()
    const passDefault = this.PASSWORD_DEFAULT
    const passwordHashed = await this.authService.hashPassword(passDefault)
    const dataCreate = {
      ...data,
      code,
      password: passwordHashed,
      education: {
        ...data.education,
        education_id: this.commonService.generateId(),
      },
    }
    const userCreated = await this.userRepository.createUser(dataCreate)
    if (userCreated) {
      await this.updateCacheUser()
    }
    return userCreated
  }

  async generateStudentCode(): Promise<number> {
    const code = Math.floor(20000000 + Math.random() * 9999)
    const users = (await this.cacheManager.get('user')) as any
    if (users && users !== '{}') {
      const usersParsed = JSON.parse(users)
      const user = usersParsed.find((data: any) => data.code === code)
      if (user) {
        return this.generateStudentCode()
      }
    }
    return code
  }

  async logout(req: any) {
    const token = req.token
    await this.cacheManager.del(token)
  }

  private async checkLoginData(
    codeStudent: number,
    password: string,
  ): Promise<LoginDTO> {
    try {
      const user = await this.userRepository.getUserCode(codeStudent)
      await this.checkValidatePassword(password, user.password)

      return user
    } catch (e) {
      throw new HttpExceptionCustom(
        'code or password incorrect',
        HttpStatus.BAD_REQUEST,
      )
    }
  }

  private async checkValidatePassword(
    passwordLeft: string,
    passwordRight: string,
  ): Promise<void> {
    let isValid: boolean

    if (!passwordLeft && !passwordRight) {
      isValid = false
    }
    isValid = await this.authService.validatePassword(
      passwordLeft,
      passwordRight,
    )
    this.userCheck.isValidPassword(isValid)
  }
}
