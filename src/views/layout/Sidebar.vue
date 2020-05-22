<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <router-link tag="div"  to="/examInfo" class="nav">报考信息</router-link>
    <router-link tag="div"  to="/school/schoolInfo" class="nav">学校信息</router-link>
    <router-link tag="div" to="/major/majorInfo" class="nav">专业信息</router-link>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
      bg: '#8374ed',
      abg: 'red',
      tc: '#fff',
      atc: '#41B883',
      activeRoute: ''
    }
  },
  watch: {
    $route (val) {
      this.activeRoute = val
    }
  },
  components: {
  },
  computed: {
    ...mapGetters(['sidebar']),
    sliderState () {
      return this.$store.getters.sidebar.sliderState
    },
    isCollapse () {
      if (this.sidebar.sliderState === 'full') return false
      return true
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /*justify-content: center;*/
  &.full {
    .logo-container {
      width: 50px;
      height: 50px;
      margin-right: 12px;
      padding-top: 10px;
      padding-left: 20px;
      img {
        width: 100%;
      }
    }
    .word {
      width: 110px;
      height: 20px;
      /*background: url("../../assets/images/logo-word.png") no-repeat center;*/
      background-size: contain;
    }
  }
  .logo-container {
    width: 40px;
    height: 30px;
    overflow: hidden;
    transition: width, height, 0.3s;
    padding-top: 5px;
    padding-left: 10px;
    img {
      width: 100%;
    }
  }
  .word {
    width: 0;
    height: 20px;
    /*background: url("../../assets/images/logo-word.png") no-repeat center;*/
    background-size: contain;
    transition: width, height 3s;
  }
}
.sidebar-menu {
  .sidebar-wrap {
    .is-active {
      background: #fff !important;
    }
  }
}
.sidebar-container .el-menu {
  height: calc(100% - 80px) !important;
}
  .nav{
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    height: 50px;
    cursor: pointer;
    color: #6e6e6e;
  }
.router-link-active {
  text-decoration: none;
  color: #fff;
  background: #8374ed;
}
a {
  text-decoration: none;
}
</style>
