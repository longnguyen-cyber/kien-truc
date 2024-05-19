import { CACHE_MANAGER, Controller, Get, Inject, Res } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { Response } from 'express'

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get('/health-check')
  async getHello(
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    return "I'm alive!"
  }
}
