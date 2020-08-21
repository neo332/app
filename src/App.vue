<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import config from '@/config';

export default {
  created () {
    console.log(config);
  }
};
</script>
