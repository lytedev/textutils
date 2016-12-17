<template lang="pug">
  .page
    result(v-bind:value="textLength")
    textarea(v-model="text")
</template>

<script>
import Result from '../components/Result.vue'

module.exports = {
  data: function() {
    return {
      text: 'Your text here!'
    }
  },
  computed: {
    textLength: function() {
      return this.text.length
    }
  },
  components: {
    Result
  }
}
</script>

<style lang="stylus">
</style>
