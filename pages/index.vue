<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-title>都道府県</v-card-title>
        <v-card-text>
          <pre>{{ prefecture.message }}</pre>
          <pre>{{ prefecture.result }}</pre>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card>
        <v-card-title>人口構成</v-card-title>
        <v-card-text>
          <pre>{{ population.result }}</pre>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, useAsync } from '@nuxtjs/composition-api'
import { useResas } from '~/compositions/useResas'

type Prefecture = {
  message: null | string
  result: { prefCode: number; prefName: String }[] | null
}

export default defineComponent({
  setup() {
    const { getResas } = useResas()

    const prefecture = reactive<Prefecture>({
      message: null,
      result: null,
    })
    const population = reactive({
      result: null,
    })

    useAsync(async () => {
      const { data: pref } = await getResas('prefectures')
      prefecture.message = pref.message
      prefecture.result = pref.result

      const { data } = await getResas(
        'population/composition/perYear?cityCode=11362&prefCode=11'
      )
      population.result = data.result
    })

    return {
      prefecture,
      population,
    }
  },
})
</script>
