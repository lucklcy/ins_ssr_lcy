import { Configuration, App, Logger } from '@midwayjs/decorator'
import * as koa from '@midwayjs/koa'
import * as axios from '@midwayjs/axios'
import { join } from 'path'
import { initialSSRDevProxy, getCwd } from 'ssr-common-utils'
import { IMidwayContainer } from '@midwayjs/core'
import { ILogger } from '@midwayjs/logger'

const koaStatic = require('koa-static-cache')
const cwd = getCwd()

@Configuration({
  imports: [koa, axios],
  importConfigs: [join(__dirname, './config')]
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application

  @Logger()
  logger: ILogger

  async onReady(container: IMidwayContainer) {
    this.app.use(koaStatic(join(cwd, './build')))
    this.app.use(koaStatic(join(cwd, './public')))
    this.app.use(koaStatic(join(cwd, './build/client')))

    const httpService = await container.getAsync(axios.HttpService)
    httpService.interceptors.request.use(config => {
      return config
    })
    const httpServiceFactory = await container.getAsync(axios.HttpServiceFactory)
    const instagramAxios = httpServiceFactory.get('instagramAxios')
    instagramAxios.interceptors.request.use(config => {
      return config
    })
    instagramAxios.interceptors.response.use(
      response => {
        this.logger.info({ response })
        return response.data
      },
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      error => {
        this.logger.info(error)
        return Promise.reject(error)
      }
    )

    await initialSSRDevProxy(this.app)
  }
}
