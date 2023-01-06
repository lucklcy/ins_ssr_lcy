/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provide } from '@midwayjs/decorator'
import { IUserInitResponse } from '~/typings/data'
import { HttpServiceFactory, HttpService } from '@midwayjs/axios'
import { InjectClient } from '@midwayjs/core'

@Provide('InstagramService')
export class InstagramService {
  @InjectClient(HttpServiceFactory, 'instagramAxios')
  instagramAxios: HttpService

  async pageInit(insUserName: string): Promise<IUserInitResponse> {
    const url = `/api/v1/feed/user/${insUserName}/username/?count=12`
    return await this.instagramAxios.get(url)
  }
}
