import { useContext } from '@nuxtjs/composition-api'
import { $axios } from '~/utils/axios'

export const useResas = () => {
  const { $config } = useContext()

  /**
   * 取得処理
   * @param {string} api
   */
  const getResas = async (api: string): Promise<any> => {
    const baseURL = 'https://opendata.resas-portal.go.jp/api/v1'
    const headers = { 'X-API-KEY': $config.RESAS_API_KEY }

    return await $axios
      .get(`${baseURL}/${api}`, {
        headers,
      })
      .then((res) => res)
      .catch((e) => e)
  }

  return {
    getResas,
  }
}
