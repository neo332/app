<script>
export default {
  name: "Watch优化",
  data () {
    return {
      title: ''
    }
  },
  watch: {
    title: {
      handler: 'getTitleApi',
      immediate: true // 创建组件时执行一次
    }
  },
  methods: {
    getTitleApi () {
    }
  }
}
</script>

