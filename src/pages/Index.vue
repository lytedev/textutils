<template lang="pug">
  .page#page-index
    router-link.page-link(to="/length")
      img.icon(class="emoji" draggable="false" alt="📏")
      span Length
</template>

<script>
</script>

<style lang="stylus">
#page-index
  flex-wrap wrap
  flex-direction row
  justify-content center
  align-items center

  .page-link
    text-align center
    flex-grow 1
    min-width 25%
    max-width 20rem
    color #000
    background-color rgba(255, 255, 255, 1)
    border-radius 0.3rem
    border solid 1px #ccc
    font inherit
    padding 1rem
    resize none
    box-shadow 0px 0.1rem 0.1rem #ddd
    transition all 0.2s ease

    .icon
      font-size 10rem

    &:hover
      box-shadow 0px 0.4rem 0.4rem #ccc
      z-index 2
</style>
