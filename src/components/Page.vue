<template lang="pug">
.page
  header
    h1(v-show="showTitle") {{ $route.meta.title }}
    .help-text {{ $route.meta.description }}
    //- search
  content
    slot
</template>

<script>
import Page from '../components/mixins/page.js'

export default {
  props: {
    showTitle: {
      default: true
    }
  },
  mixins: [ Page ],
  beforeRouteEnter: function(from, to, next) {
    document.title = from.meta.title + ' | TextUtils.org'
    return next()
  }
}
</script>

<style lang="stylus">
.page
  display flex
  flex-wrap wrap
  flex-direction column
  flex-grow 1

  width 100%
  max-width 920px
  margin 0 auto
  padding 1rem
  font-size 1.6rem
  text-shadow 0px 0.1rem 0.1rem #fff

  h1
    font-size 2.4rem
    font-weight bold
    margin-bottom 1rem
    text-align center

  .help-text
    text-align center
    margin-bottom 1rem

header, content
  width 100%

content
  display flex
  flex-grow 1
  flex-wrap wrap
  justify-content center
</style>
