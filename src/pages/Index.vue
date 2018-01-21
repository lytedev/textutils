<template lang="pug">
.page#page-index
  router-link.page-link(v-for="(page, key) in pages" v-if="isPageListed(page)" v-bind:to="page.path")
    .icon-container(v-html="page.meta.iconHtml")
    .info
      .empty-help ?
      .label {{ page.meta.title }}
      abbr.help(v-bind:title="page.meta.description") ?
</template>

<script>
import {default as PageRoutes} from '../routes/page-routes.js'
import Page from '../components/mixins/page.js'

export default {
  mixins: [
    Page
  ],
  data: function() {
    return {
      pages: PageRoutes
    }
  },
  methods: {
    isPageListed: function(page) {
      return page.meta.isShownInIndexMenu
    }
  }
}
</script>

<style lang="stylus">
</style>
