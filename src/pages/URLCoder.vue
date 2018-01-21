<template lang="pug">
  .page
    h1 {{ $route.meta.title }}
    // .icon(v-html="metadata.iconHtml")
    .help-text {{ $route.meta.description }}
    // result(v-bind:value="textLength")
    main-input-textarea(v-bind:text="text" v-on:input="setEncodedText")
    main-input-textarea(v-bind:text="encodedText" v-on:input="setText")
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
      text: '',
      encodedText: ''
    }
  },
  methods: {
    setEncodedText: function(text) {
      console.log('setEncodedText', text)
      this.encodedText = encodeURIComponent(text)
    },
    setText: function(text) {
      console.log('setText', text)
      try {
        this.text = decodeURIComponent(text)
      } catch (e) {
        this.text = e.toString()
      }
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
