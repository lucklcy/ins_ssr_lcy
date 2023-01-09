import { MidwayConfig } from '@midwayjs/core'
import { INSTAGRAM_COOKIE, PROXY_IP, PROXY_PORT } from '../common/const'
const HttpsProxyAgent = require('https-proxy-agent')
const agent = new HttpsProxyAgent(`http://${PROXY_IP}:${PROXY_PORT}`)

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1650192482948_2252',
  axios: {
    default: {
      // 所有实例复用的配置
      timeout: 10 * 1000 // default is `0` (no timeout)
    },
    clients: {
      // 默认实例的配置
      default: {
        baseURL: 'https://api.example.com',
        // `headers` are custom headers to be sent
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: true // default
      },
      instagramAxios: {
        // 自定义实例
        baseURL: 'https://www.instagram.com',
        // `headers` are custom headers to be sent
        headers: { cookie: INSTAGRAM_COOKIE, accept: '*/*' },
        httpsAgent: agent,
        httpAgent: agent,
        withCredentials: true // default
      }
    }
  }
} as MidwayConfig
