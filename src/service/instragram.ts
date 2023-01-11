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

  /**
   * *获取首页配置
   * @param bloggers 博主名称
   * @returns
   */
  async feedInit(bloggers: string): Promise<IUserInitResponse> {
    const url = `/api/v1/feed/user/${bloggers}/username/?count=12`
    return await this.instagramAxios.get(url)
  }

  // *获取下一页配置
  async getFeedNext(pkId: string, maxId: string): Promise<IUserInitResponse> {
    const url = `/api/v1/feed/user/${pkId}/?count=12&max_id=${maxId}`
    return await this.instagramAxios.get(url)
  }
}
