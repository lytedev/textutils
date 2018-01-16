<template lang="pug">
  #app
    site-header
    router-view
    site-footer
</template>

<script>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

document.title = "TextUtils.org"

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono')

*::before, *::after, *
  box-sizing border-box

html, body
  margin 0
  padding 0

html
  font 62.5% 'Ubuntu', sans-serif;
  background-color $background-color

body
  position relative
  background-color #eee

h1, h2, h3, h4, h5, h6
  font-size inherit
  font-weight inherit
  margin 0
  padding 0

#app
  min-height 100vh
  display flex
  flex-direction column
  justify-content space-between

a
  text-decoration none
  color $primary-color

::selection
  text-shadow none
  color #fff
  background-color $primary-color

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

input, button, .btn, textarea
  background-color rgba(255, 255, 255, 1)
  border-radius 0.3rem
  border solid 1px #ccc
  font inherit
  padding 1rem
  resize none
  box-shadow 0px 0.1rem 0.1rem #ddd
  transition all 0.2s ease
  z-index 0

  &:hover
    box-shadow 0px 0.4rem 0.4rem #ccc
    z-index 2

textarea
  font-family "Ubuntu Mono", monospace
</style>
