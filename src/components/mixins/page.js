export default {
  computed: {
    routeMetadata: function() {
      console.log('routeMetadata:', this.$route.matched)
    }
  }
}
