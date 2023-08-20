<template>
  <div class="main-home">
    <!-- <Rectangle></Rectangle> -->
    <!-- home-left -->
    <div class="main-home-left">
      <HomeLeft></HomeLeft>
    </div>
    <!-- home-right -->
    <div class="main-home-right">
      <div>
        <TopRectangleNav></TopRectangleNav>
      </div>
      <Rectangle></Rectangle>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Rectangle from '@/components/Rectangle.vue';
import HomeLeft from '@/components/HomeLeft.vue'
import TopRectangleNav from '@/components/TopRectangleNav.vue';

export default {
  components: {
    Rectangle,
    HomeLeft,
    TopRectangleNav
  }
}
</script>
<style>
.main-home {
  display: flex;
  justify-content: space-between;
}

.main-home-left {
  width: 500px;
  height: 400px;
  margin-left: 50px;
  margin-top: 200px;
}

.main-home-right {
  width: 620px;
  height: 600px;
  margin-top: 120px;
  margin-right: 180px;
  /* border: 2px solid #ccc; */
  /* background-color: rebeccapurple; */
}
</style>