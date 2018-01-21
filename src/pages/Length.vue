<template lang="pug">
  .page
    h1 {{ $route.meta.title }}
    // .icon(v-html="metadata.iconHtml")
    .help-text {{ $route.meta.description }}
    result(v-bind:value="textLength")
    main-input-textarea(v-bind:text="text" v-on:input="setText")
</template>

<script>
import Result from '../components/Result.vue'
import MainInputTextarea from '../components/MainInputTextarea.vue'
import Page from '../components/mixins/page.js'

export default {
  mixins: [
    Page
  ],
  data: function() {
    return {
      text: ''
    }
  },
  methods: {
    setText: function(text) {
      this.text = text
    }
  },
  computed: {
    textLength: function() {
      return this.text.length
    }
  },
  components: {
    Result,
    MainInputTextarea
  }
}
</script>

<style lang="stylus">
</style>
