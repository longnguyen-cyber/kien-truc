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
    const value = await this.cacheManager.store.keys()
    console.log(value)
    // for (const key of value) {
    //   if (key.includes('chat') || key.includes('channel')) {
    //     await this.cacheManager.del(key)
    //   }
    // }
    // console.log(request.cookies)
    // console.log(request.signedCookies)
    response.cookie('key', 'value')
    return "I'm alive!"
  }
}
