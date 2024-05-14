import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import { MailerService } from '@nest-modules/mailer'
import { Logger } from '@nestjs/common'

@Processor('queue')
export class EmailConsumer {
  constructor(private mailerService: MailerService) {}
  private readonly logger = new Logger(EmailConsumer.name)
  @Process('register')
  async registerEmail(job: Job<unknown>) {
    console.log('Start send email')
    const time1 = new Date()
    await this.mailerService.sendMail({
      to: job.data['to'],
      subject: 'Thư thông báo đăng ký môn học thành công',
      template: './notifications',
      context: {
        name: job.data['name'],
      },
    })
    const time2 = new Date()
    console.log('Send Success: ', time2.getTime() - time1.getTime(), 'ms')
  }
}
