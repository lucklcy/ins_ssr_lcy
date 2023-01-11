import { IUserInitResponse } from '~/typings/data'
export interface IInstagramService {
  feedInit: (bloggers: string) => Promise<IUserInitResponse>
  getFeedNext: (pkId: string, maxId: string) => Promise<IUserInitResponse>
}
