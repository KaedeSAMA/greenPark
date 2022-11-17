<template>
  <div class="homeRoot">
    <myHeaderRoot>
      <router-view></router-view>
    </myHeaderRoot>
  </div>
</template>

<script>
import myHeaderRoot from '../components/my-header.vue';
export default {
  components:{
    myHeaderRoot,
  }
}
</script>

<style>
.homeRoot{
  width: 100vw;
  height: 100vh;
  background-color: rgb(249, 249, 249);

}
</style>