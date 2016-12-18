<template lang="pug">
  footer#site-footer
    #copyright Copyright &copy; 2016
    #byline= "Coded with ❤ by "
      a(href="https://lytedev.io" target="_blank") @lytedev
      br
      = "Fork this site on "
      a(href="https://github.com/lytedev/textutils") GitHub
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

<style lang="stylus">
#site-footer
  font-size 1.2em
  display flex
  justify-content space-between
  align-items center

  // position absolute
  // bottom 0
  width 100%

  background-color #111
  color #aaa
  padding 0.5em

  #copyright
    padding 0.5em

  #byline
    padding 0.5em
    text-align right

  @media screen and (max-width: $mobile-breakpoint)
    flex-direction column-reverse

    #byline
      text-align center
</style>
