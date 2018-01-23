<template lang="pug">
page#page-index(:show-title="false")
  router-link.page-link(v-for="(page, key) in pages" v-if="isPageListed(page)" v-bind:to="page.path")
    .info
      .label {{ page.meta.title }}
      abbr.help(v-bind:title="page.meta.description") ?
    .icon-container(v-html="page.meta.iconHtml")
</template>

<script>
import {default as PageRoutes} from '../routes/page-routes.js'
import Page from '../components/Page.vue'

export default {
  components: {
    Page
  },
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
