<template>
  <highcharts :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    chartTitle: {
      type: String,
      required: true,
    },
    axis: {
      type: Object,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const chartOptions = computed(() => {
      return {
        chart: {},
        title: {
          text: props.chartTitle,
          style: {
            color: '#333',
          },
        },
        yAxis: {
          title: {
            text: props.axis.y.title,
          },
        },
        xAxis: {
          title: {
            text: props.axis.x.title,
          },
          categories: props.axis.x.categories,
        },
        plotOptions: {},
        series: props.series,
      }
    })
    return { chartOptions }
  },
})
</script>
