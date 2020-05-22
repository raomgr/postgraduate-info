<template>
  <el-container>
    <el-container>
      <el-main>
        <el-select v-model="year" placeholder="选择年份">
          <el-option
            v-for="item in yearList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="content">
<!--          <div class="master-degree">-->
<!--            <h3>学硕招生人数</h3>-->
<!--            <multiple-line-chart :chart-data="schoolInfo" :series="series"  height="500px" />-->
<!--          </div>-->
          <el-table
            :data="tableData"
            border
            height="600px"
            style="width: 100%">
            <el-table-column
              fixed
              prop="schoolName"
              label="学校"
              width="150px"
            >
            </el-table-column>
            <el-table-column
              prop="location"
              label="地点">
            </el-table-column>
            <el-table-column
              prop="collegeName"
              label="所属学院">
            </el-table-column>
            <el-table-column
              prop="count"
              label="招生人数">
            </el-table-column>
            <el-table-column
              prop="tuimian"
              label="推免人数">
            </el-table-column>
            <el-table-column
              prop="exam"
              label="统考人数">
            </el-table-column>
            <el-table-column
              prop="scoreLine"
              label="复试分数线">
            </el-table-column>
            <el-table-column
              prop="subject1"
              label="科目一分数">
            </el-table-column>
            <el-table-column
              prop="subject2"
              label="科目二分数">
            </el-table-column>
            <el-table-column
              prop="subject3"
              label="科目三分数">
            </el-table-column>
            <el-table-column
              prop="subject4"
              label="科目四分数">
            </el-table-column>
            <el-table-column
              prop="register"
              label="报名人数">
            </el-table-column>
            <el-table-column
              prop="upLine"
              label="上线人数">
            </el-table-column>
            <el-table-column
              prop="entry"
              label="复试人数">
            </el-table-column>
            <el-table-column
              prop="topScore"
              label="录取最高分">
            </el-table-column>
            <el-table-column
              prop="average"
              label="录取平均分">
            </el-table-column>
            <el-table-column
              prop="bottomScore"
              label="录取最低分">
            </el-table-column>
            <el-table-column
              prop="studyTime"
              label="学制">
            </el-table-column>
            <el-table-column
              prop="cost"
              label="学费">
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import MultipleLineChart from '../components/Charts/MultipleLineChart'
export default {
  name: 'Exam',
  components: {
    // MultipleLineChart
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
          barWidth: 16,
          data: [320, 332, 301, 334, 390]
        },
        {
          name: '浙江大学',
          type: 'bar',
          barWidth: 16,
          data: [160, 132, 101, 134, 90]
        },
        {
          name: '北京航空航天大学',
          type: 'bar',
          barWidth: 16,
          data: [160, 132, 101, 134, 90]
        },
        {
          name: '南京大学',
          type: 'bar',
          barWidth: 16,
          data: [160, 132, 101, 134, 90]
        },
        {
          name: '武汉大学',
          type: 'bar',
          barWidth: 16,
          data: [160, 132, 101, 134, 90]
        },
        {
          name: '中国科学技术大学',
          type: 'bar',
          barWidth: 16,
          data: [220, 182, 191, 234, 290]
        },
        {
          name: '北京理工大学',
          type: 'bar',
          barWidth: 16,
          data: [220, 182, 191, 234, 290]
        },
        {
          name: '天津大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }, {
          name: '中山大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }, {
          name: '电子科技大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }, {
          name: '北京邮电大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }, {
          name: '北京科技大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }, {
          name: '北京工业大学',
          type: 'bar',
          barWidth: 16,
          data: [150, 232, 201, 154, 190]
        }
      ],
      tableData: [
        {
          schoolName: '北京大学',
          location: '北京',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '浙江大学',
          location: '杭州',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '南京大学',
          location: '南京',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '北京航空航天大学',
          location: '北京',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '华中科技大学',
          location: '武汉',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '中国科学技术大学',
          location: '合肥',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '北京邮电大学',
          location: '北京',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '电子科技大学',
          location: '成都',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '武汉大学',
          location: '武汉',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '中山大学',
          location: '广州',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
        },
        {
          schoolName: '天津大学',
          location: '天津',
          collegeName: '计算机学院',
          count: 200,
          tuimian: 100,
          exam: 100,
          scoreLine: 350,
          subject1: 55,
          subject2: 55,
          subject3: 90,
          subject4: 100,
          register: 800,
          upLine: 360,
          entry: 300,
          topScore: 450,
          average: 380,
          bottomScore: 350,
          studyTime: 2,
          cost: 60000
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
  .content{
    margin: 0 auto;
  }
</style>
