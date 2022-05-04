<template>
  <v-container>
    <v-row justify="center">
      <v-col col="12">
        <v-card>
          <v-card-text class="row ma-3">
            <v-checkbox
              v-for="pref in prefecture.result"
              :key="pref.id"
              v-model="state.selected"
              class="mr-5 my-0"
              :label="pref.prefName"
              :value="pref"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card v-if="state.selected.length">
          <v-card-text>
            <Highcharts
              :chart-title="chartState.chartTitle"
              :axis="chartState.axis"
              :series="chartState.series"
            />
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-text class="d-flex justify-center align-center"
            >都道府県を選択してください</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useAsync,
  watch,
} from '@nuxtjs/composition-api'
import {
  useResas,
  Prefecture,
  Population,
  Series,
} from '~/compositions/useResas'
import Highcharts from '@/components/Highcharts.vue'

type State = {
  selected: Prefecture[]
}
type ChartState = {
  chartTitle: string
  axis: { x: { title: string; categories: string[] }; y: { title: string } }
  series: Series
}
type PrefectureState = {
  message: string | null
  result: Prefecture
}

export default defineComponent({
  components: {
    Highcharts,
  },

  setup() {
    const { getResas } = useResas()
    const state = reactive<State>({
      selected: [],
    })
    const chartState = reactive<ChartState>({
      chartTitle: '',
      axis: {
        x: {
          title: '年度',
          categories: [],
        },
        y: {
          title: '人口数',
        },
      },
      series: [],
    })

    watch(state, async () => {
      const _series: Series = []

      state.selected.forEach(async (item: Prefecture) => {
        if (!item) return
        const path = 'population/composition/perYear?prefCode='
        const { data } = await getResas(`${path}${item.prefCode}`)
        const _data = data.result.data[0].data

        // 実データ
        const _value = _data.map((v: Population) => v.value)
        // 横軸
        const _year = _data.map((v: Population) => String(v.year))

        _series.push({
          name: item.prefName,
          data: _value,
        })
        chartState.axis.x.categories = _year
      })

      chartState.series = _series
    })

    // Axios get value
    const prefecture = reactive<PrefectureState>({
      message: null,
      result: null,
    })

    useAsync(async () => {
      const { data } = await getResas('prefectures')
      prefecture.result = data.result
    })

    return {
      state,
      chartState,
      prefecture,
    }
  },
})
</script>
