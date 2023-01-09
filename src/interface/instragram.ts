import { IUserInitResponse } from '~/typings/data'
export interface IInstagramService {
  pageInit: (bloggers: string) => Promise<IUserInitResponse>
}
