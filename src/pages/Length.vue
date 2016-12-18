<template lang="pug">
  .page
    h1 String/Text Length
    .help-text Calculate the number of characters (letters, numbers, or symbols) in a string or a bit of text.
    result(v-bind:value="textLength")
    main-input-textarea(v-bind:text="text" v-on:main-input-change="setText")
</template>

<script>
import Result from '../components/Result.vue'
import MainInputTextarea from '../components/MainInputTextarea.vue'

module.exports = {
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
