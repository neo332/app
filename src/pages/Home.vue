<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home'
    };
  },
  render (createElement, context) {
    console.log(context);
    return createElement('h1', 'hello');
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  @include ok;
  color: $main-color;
}
</style>
