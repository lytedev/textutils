<template lang="pug">
  header#site-header
    .logo-container
      .logo
        strong Text
        | Utils
      .pitch Simple, beautiful, and free online text and string utilities.
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

  background-color #111
  color #fff
  padding 0.25rem

  .logo-container
    display flex
    align-items center
    flex-grow 1
    text-align center

    @media screen and (max-width: 32rem)
      flex-direction column

    .logo
      font-size 1.5rem
      padding 0.25rem 0.75rem
</style>
