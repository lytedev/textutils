<template lang="pug">
  .result
    | Length
    input(v-bind:value="resultValue" readonly)
    button Copy
</template>

<script>
module.exports = {
  name: 'result',
  props: ['value']
}
</script>

<style lang="stylus">
</style>

