import { useContext } from '@nuxtjs/composition-api'
import { $axios } from '~/utils/axios'

export type Prefecture = { prefCode: number; prefName: string } | null
export type Population = { year: number; value: number }
export type Series = { name: string; data: number[] }[] | null

export const useResas = () => {
  const { $config } = useContext()

  /**
   * 取得処理
   * @param {string} path
   */
  const getResas = async (path: string): Promise<any> => {
    const baseURL = 'https://opendata.resas-portal.go.jp/api/v1'
    const headers = { 'X-API-KEY': $config.RESAS_API_KEY }

    return await $axios
      .get(`${baseURL}/${path}`, {
        headers,
      })
      .then((res) => res)
      .catch((e) => e)
  }

  return {
    getResas,
  }
}
