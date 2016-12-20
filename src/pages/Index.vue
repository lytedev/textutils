<template lang="pug">
  .page#page-index
    router-link.page-link(v-for="(page, key) in pages" v-if="page.isShownInIndexMenu == true" v-bind:to="page.relativeUrl")
      .icon-container(v-html="page.iconHtml")
      .info
        .empty-help ?
        .label {{ page.title }}
        abbr.help(v-bind:title="page.description" v-on:click.prevent.stop="showDescription") ?
</template>

<script>
import {default as PageMetadata} from './page-metadata.js'

export default {
  data: function() {
    return {
      pages: PageMetadata
    }
  },
  methods: {
    showDescription: function() {
      null // just a dummy function - we actually just use CSS
    },
    isPageInMenu: function(page) {
      console.log(page)
    }
  }
}

</script>

<style lang="stylus">
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
      text-align center
      display flex
      justify-content space-between
      align-items center
      flex-grow 1
      width 100%
      background-color #f4f4f4
      border-top solid 1px #ccc

      .label
        padding 1rem
        max-width 80%

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
          font-size 0.9rem
          transition all 0.2s ease

    &:hover
      box-shadow 0px 0.4rem 0.4rem #ccc
      z-index 2
</style>
