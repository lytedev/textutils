<template lang="pug">
  header#site-header
    .logo-container
      router-link.logo(to="/")
        strong Text
        | Utils
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

<style lang="stylus">
#site-header
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center

  background-color $background-color
  color #fff
  padding 0.25em

  .logo-container
    display flex
    align-items center
    flex-grow 1
    text-align center

    @media screen and (max-width: $mobile-breakpoint)
      flex-direction column

    .logo
      color #fff
      cursor pointer
      font-size 2.4em
      padding 0.25em
</style>
