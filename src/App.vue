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
  },
  beforeRouteEnter: function(from, to, next) {
    document.title = 'TextUtils.org'
    next()
  },
  methods: {
    isPageListed: function(page) {
      if (typeof page.meta === 'undefined') return false
      if (typeof page.meta.isShownInIndexMenu === 'undefined') return false
      return page.meta.isShownInIndexMenu === true
    }
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

#page-index
  display flex
  justify-content center
  flex-wrap wrap
  flex-direction row
  flex-grow 0

  .page-link
    margin 0.5rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    flex-grow 1
    flex-shrink 1

    text-align center
    width 100px
    min-width 25%
    max-width 20rem
    color #000
    background-color rgba(255, 255, 255, 1)
    border-radius 0.3rem
    border solid 1px #ccc
    font inherit
    resize none
    box-shadow 0px 0.1rem 0.1rem #ddd
    transition all 0.2s ease
    position relative

    &:hover
      .info .help
        opacity 1

    .icon-container
      line-height 0

      .icon
        width 10rem
        height 10rem
        margin 1rem

    .info
      text-align left
      display flex
      justify-content space-between
      align-items center
      flex-grow 1
      width 100%
      background-color #f4f4f4
      border-bottom solid 1px #ccc

      .label
        padding 1rem
        max-width 80%
        overflow hidden
        text-overflow ellipsis

      .empty-help
        opacity 0
        min-width 2.5rem
        min-height 2.5rem

      .help
        display flex
        justify-content center
        align-items center
        min-width 2.5rem
        min-height 2.5rem
        overflow visible
        opacity 0
        // border-radius 100%
        // border dotted 2px #ccc
        transition all 0.2s ease
        color #888

        @media screen and (max-width: $mobile-breakpoint)
          opacity 1

        &:hover:after
          opacity 1
          margin-top 1rem

        &:after
          text-align center
          overflow hidden
          text-overflow ellipsis
          padding 1em
          opacity 0
          background $background-color
          color #fff
          text-shadow none
          border-radius 0.5rem
          content attr(title)
          position absolute
          left 0
          top 100%
          margin-top 0
          z-index 100
          width 100%
          font-size 1.3rem
          transition all 0.2s ease
          pointer-events none

    &:hover
      box-shadow 0px 0.4rem 0.4rem #ccc
      z-index 2
</style>
