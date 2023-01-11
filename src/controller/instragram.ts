/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'
import { IInstagramService } from '../interface'
import { Query } from '@midwayjs/core'

@Provide()
@Controller('/instragram')
export class Instragram {
  @Inject()
  ctx: Context

  @Inject('InstagramService')
  instagramService: IInstagramService

  @Get('/pageInit')
  async getPageInitConfig(@Query('bloggers') bloggers: string) {
    let data = await this.instagramService.feedInit(bloggers)
    const { user, next_max_id: maxId } = data
    const { pk_id: pkId } = user
    if (maxId) {
      data = await this.instagramService.getFeedNext(pkId, maxId)
    }
    return data
  }
}
