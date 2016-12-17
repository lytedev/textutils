<template lang="pug">
  .page
    router-link(to="/") Other Text Utilities
    p Length:
      span(v-html="textLength")
    textarea(v-model="text")
</template>

<script>
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
  }
}
</script>

<style lang="stylus">
</style>
