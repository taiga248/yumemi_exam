import colors from 'vuetify/es5/util/colors'
import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  ssr: false,
  target: 'static',
  head: {
    // titleTemplate: '%s - YUMEMI',
    title: 'YUMEMI EXAM',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],
  plugins: [
    '@/plugins/axios-accessor',
    {
      src: '@/plugins/highcharts-vue',
      mode: 'client',
    },
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  publicRuntimeConfig: {
    RESAS_API_KEY: process.env.RESAS_API_KEY || 'dummy_key',
  },

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
}

export default nuxtConfig
