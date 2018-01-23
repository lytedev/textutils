<template lang="pug">
  .main-input-textarea
    textarea.main-input(placeholder="Type or paste your text here" v-bind:value="text" v-on:input="$emit('input', $event.target.value)" v-on:change="$emit('change', $event.target.value)")
</template>

<script>
module.exports = {
  name: 'main-input-textarea',
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
