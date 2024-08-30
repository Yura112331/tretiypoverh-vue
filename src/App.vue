<template>
  <Header></Header>
  <div>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.widget-wrapper .widget__body {
  background-image: url("img/tg_bg.jpg");
}
</style>