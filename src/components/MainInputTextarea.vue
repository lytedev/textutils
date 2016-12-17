<template lang="pug">
  .main-input-textarea
    textarea.main-input(placeholder="Type or paste your text here" v-model="mtext")
</template>

<script>
module.exports = {
  name: 'main-input-textarea',
  data: function() {
    return {
      mtext: this.text
    }
  },
  watch: {
    mtext: function(val, old) {
      this.$emit('main-input-change', val)
    }
  },
  props: ['text']
}
</script>

<style lang="stylus">
.main-input-textarea
  flex-grow 1
  display flex

  textarea
    flex-grow 1
</style>
