export default {
  beforeRouteEnter: function(from, to, next) {
    document.title = from.meta.title + ' | TextUtils.org'
    next()
  },
  computed: {
    routeMetadata: function() {
      console.log('routeMetadata:', this.$route.matched)
    }
  }
}
