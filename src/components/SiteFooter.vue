<template lang="pug">
  footer#site-footer
    #copyright Copyright &copy; 2016
    #byline= "Coded with <3 by "
      a(href="https://lytedev.io" target="_blank") @lytedev
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

<style lang="stylus">
#site-footer
  display flex
  justify-content space-between

  position absolute
  bottom 0
  width 100%

  background-color #111
  color #aaa
  padding 1rem
</style>
