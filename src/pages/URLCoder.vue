<template lang="pug">
  .page
    h1 {{ metadata.title }}
    // .icon(v-html="metadata.iconHtml")
    .help-text {{ metadata.description }}
    result(v-bind:value="textLength")
    main-input-textarea(v-bind:text="text" v-on:main-input-change="urlencode")
    main-input-textarea(v-bind:text="urlencodedText" v-on:main-input-change="urldecode")
</template>

<script>
import Result from '../components/Result.vue'
import MainInputTextarea from '../components/MainInputTextarea.vue'
import {Length as PageMetadata} from './page-metadata.js'

export default {
  data: function() {
    return {
      text: '',
      metadata: PageMetadata
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
