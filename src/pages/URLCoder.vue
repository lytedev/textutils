<template lang="pug">
page
  // .icon(v-html="metadata.iconHtml")
  // result(v-bind:value="textLength")
  main-input-textarea(v-bind:text="text" v-on:input="setEncodedText")
  main-input-textarea(v-bind:text="encodedText" v-on:input="setText")
</template>

<script>
import Result from '../components/Result.vue'
import MainInputTextarea from '../components/MainInputTextarea.vue'
import Page from '../components/Page.vue'

export default {
  components: {
    Page,
    Result,
    MainInputTextarea
  },
  data: function() {
    return {
      text: '',
      encodedText: ''
    }
  },
  methods: {
    rfc3986EncodeURIComponent: function(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, escape)
    },
    rfc3986DecodeURIComponent: function(str) {
      // return decodeURIComponent(str).replace(/[!'()*]/g, escape)
      return unescape(decodeURIComponent(str))
    },
    setEncodedText: function(text) {
      console.log('setEncodedText', text)
      this.encodedText = this.rfc3986EncodeURIComponent(text)
    },
    setText: function(text) {
      console.log('setText', text)
      try {
        this.text = this.rfc3986DecodeURIComponent(text)
      } catch (e) {
        this.text = e.toString()
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
