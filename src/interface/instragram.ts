import { IUserInitResponse } from '~/typings/data'
export interface IInstagramService {
  pageInit: (insUserName: string) => Promise<IUserInitResponse>
}
