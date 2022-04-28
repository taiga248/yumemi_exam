<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title>{{ state.title }}</v-card-title>
        <v-card-text>{{ state.text }}</v-card-text>
        <v-card-text>
          <pre>{{ state.sampleObject }}</pre>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, useAsync } from '@nuxtjs/composition-api'
import { SampleType, useSample } from '@/compositions/useSample'
type State = {
  title: string
  text: string
  sampleObject: SampleType | null
}
export default defineComponent({
  setup() {
    const { getSample } = useSample()
    const state = reactive<State>({
      title: 'タイトル',
      text: 'テキスト',
      sampleObject: null,
    })
    useAsync(async () => {
      const obj = await getSample()
      state.sampleObject = obj
    })
    return {
      state,
    }
  },
})
</script>
