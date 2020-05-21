<template>
  <section class="main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="stylus" scoped>
.main {
  height 'calc(%s - %s)' % (100% 40px);
  /*padding: 20px;*/
  overflow: hidden;
  box-sizing: border-box;
}
</style>
