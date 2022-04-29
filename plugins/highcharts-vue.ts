import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import exportingInit from 'highcharts/modules/exporting'
import exportingCSV from 'highcharts/modules/export-data'
import HighchartsMapModule from 'highcharts/modules/map'

Vue.use(HighchartsVue)

if (typeof Highcharts === 'object') {
  stockInit(Highcharts)
  exportingInit(Highcharts)
  exportingCSV(Highcharts)
  HighchartsMapModule(Highcharts)

  // eslint-disable-next-line import/no-named-as-default-member
  Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ',',
      numericSymbols: undefined,
    },
  })
}
