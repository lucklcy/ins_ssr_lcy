/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provide } from '@midwayjs/decorator'
import { IUserInitResponse } from '~/typings/data'
import { HttpServiceFactory, HttpService } from '@midwayjs/axios'
import { InjectClient, Inject } from '@midwayjs/core'
import { ILogger } from '@midwayjs/logger'

@Provide('InstagramService')
export class InstagramService {
  @InjectClient(HttpServiceFactory, 'instagramAxios')
  instagramAxios: HttpService

  @Inject()
  logger: ILogger // 获取上下文日志

  async pageInit(bloggers: string): Promise<IUserInitResponse> {
    const url = `/api/v1/feed/user/${bloggers}/username/?count=12`
    return await this.instagramAxios.get(url)
  }
}
