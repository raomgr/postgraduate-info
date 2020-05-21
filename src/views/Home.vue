<template>
  <el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-select v-model="year" placeholder="选择年份">
          <el-option
            v-for="item in yearList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <multiple-line-chart :chart-data="schoolInfo" :series="series" width="80%" height="500px" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MultipleLineChart from '../components/Charts/MultipleLineChart'
export default {
  name: 'emailManage',
  components: {
    MultipleLineChart
  },
  data () {
    return {
      yearList: [
        {
          value: 2020,
          label: '2020年'
        }, {
          value: 2019,
          label: '2019年'
        }, {
          value: 2018,
          label: '2018年'
        }, {
          value: 2017,
          label: '2017年'
        }, {
          value: 2016,
          label: '2016年'
        }
      ],
      schoolList: [
        {
          value: 1,
          label: '北京大学',
          level: [1, 2], // 985、211
          phd: true,
          location: '北京市'
        }
      ],
      year: '',
      schoolInfo: {
        xAxisData: [2020, 2019, 2018, 2017, 2016]
      },
      series: [
        {
          name: '北京大学',
          type: 'bar',
          data: [320, 332, 301, 334, 390]
        },
        {
          name: '浙江大学',
          type: 'bar',
          data: [120, 132, 101, 134, 90]
        },
        {
          name: '中国科学技术大学',
          type: 'bar',
          data: [220, 182, 191, 234, 290]
        },
        {
          name: '天津大学',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
        }, {
          name: '中山大学',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
        }, {
          name: '电子科技大学',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
        }, {
          name: '北京邮电大学',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
        }
      ]
    }
  },
  watch: {
  },
  computed: {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .main{
  }
</style>
