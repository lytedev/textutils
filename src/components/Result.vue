<template lang="pug">
  .result
    | Length
    input(v-bind:value="niceValue" readonly v-on:click="selectAll")
    button Copy
</template>

<script>
module.exports = {
  name: 'result',
  computed: {
    niceValue: function() {
      return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  methods: {
    selectAll: function(ev) {
      ev.target.select()
    }
  },
  props: ['value']
}
</script>

<style lang="stylus">
.result
  display flex
  justify-content center
  align-items baseline
  width 100%
  margin-bottom 1em

  input
    flex-grow 1
    margin-left 0.25em
    border-right none
    border-bottom-right-radius 0
    border-top-right-radius 0

  button
    border-bottom-left-radius 0
    border-top-left-radius 0
    text-shadow 0px 0px 1px rgba(255, 255, 255, 0.9)
</style>

