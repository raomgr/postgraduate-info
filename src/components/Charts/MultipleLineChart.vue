<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    },
    xName: {
      type: String,
      default: ''
    },
    yName: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default () {
        return {}
      }
    },
    grid: {
      type: Object,
      default () {
        return {}
      }
    },
    rank: {
      type: [String, Number],
      default: 0
    },
    moduleName: {
      type: String,
      default: ''
    },
    legendList: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: '%'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    // chartData: {
    //   deep: true,
    //   handler: function(val) {
    //     this.initChart(this.series, val, this.grid, this.legendList)
    //   }
    // },
    series: {
      deep: true,
      handler: function (val) {
        this.initChart(val, this.chartData, this.grid, this.legendList)
      }
    },
    rank (vla) {
      // console.log(vla)
    }
  },
  mounted () {
    this.initChart(this.series, this.chartData, this.grid, this.legendList)
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart (series, chartData, { left = '3%', right = '3%', top = '30', bottom = '5%' } = {}, legendList) {
      this.chart = echarts.init(this.$el, 'westeros')
      // let max = 56
      // if (Object.keys(chartData).length) {
      //   const filterMax = Math.floor(Math.max(...chartData.averageScore, ...chartData.gapScore, ...chartData.scoreRate, ...chartData.target3))
      //   if (filterMax) {
      //     max = (Math.floor(filterMax / 8) + 1) * 8
      //   } else if (chartData.averageScore[0]) {
      //     max = (Math.floor(Math.max(...chartData.averageScore) / 8) + 1) * 8
      //   }
      // }
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          // formatter: (params) => {
          //   let str = `${params[0].name}<br/>`
          //   params.forEach((item, i) => {
          //     str += `${item.marker}${item.seriesName}：${item.data}${this.unit}<br/>`
          //   })
          //   return str
          // },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#32C5E9'
          },
          extraCssText: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);' // 给tooltip添加阴影
        },
        legend: {
          data: legendList,
          left: 'center',
          bottom: 0,
          itemGap: 52,
          selectedMode: false
        },
        grid: {
          left: left,
          right: right,
          bottom: bottom,
          top: top,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: chartData.xAxisData,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ececec'
              }
            },
            axisTick: {
              show: false
            },
            // 横坐标名称
            name: this.xName,
            nameLocation: 'end', // 坐标名称位置
            // nameGap: 20, // 坐标轴名称距离轴线的距离
            axisLabel: {
              color: '#666',
              interval: 0
            },
            nameTextStyle: {
              color: '#666'
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          { // 第一个y轴
            type: 'value',
            // x/y轴相关设置
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ececec'
              }
            },
            // 是否显示y轴刻度
            axisTick: {
              show: false
            },
            // y轴刻度的说明文字
            axisLabel: {
              color: '#666'
            },
            // y轴分割线
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ececec'
              }
            },
            min: 0,
            // max,
            // interval: max / 8,
            name: this.yName,
            nameTextStyle: {
              color: '#666'
            }
          }
        ],
        dataZoom: [ // 缩放图表
          // {
          //   show: true,
          //   realtime: true,
          //   start: 0,
          //   end: 50
          // },
          // {
          //   type: 'inside',
          //   realtime: true,
          //   start: 0,
          //   end: 50
          // }
          {
            type: 'inside',
            startValue: 0,
            endValue: 12,
            zoomLock: true
          }
        ],
        series
      }, true) // 设置为true时不合并之前的数据，起到更改数据后刷新的作用
    }
  }
}
</script>
