<template lang="pug">
  #app
    site-header
    router-view
    site-footer
</template>

<script>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Lato')

*::before, *::after, *
  box-sizing border-box

html, body
  margin 0
  padding 0

html
  background-color $background-color

body
  font 62.5% 'Lato', sans-serif;
  position relative
  min-height 100vh
  background-color #eee

#app
  display flex
  flex-direction column
  justify-content space-between

a
  text-decoration none
  color $primary-color

.page
  max-width 920px
  margin 0 auto
  padding 1rem
  font-size 1.6em
</style>
