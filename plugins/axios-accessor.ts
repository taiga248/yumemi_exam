// @see https://zenn.dev/hukurouo/articles/nuxt-ts-sample
import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/axios'

export const accessor: Plugin = ({ $axios }): void => {
  initializeAxios($axios)
}

export default accessor
