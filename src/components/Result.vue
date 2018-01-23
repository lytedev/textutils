<template lang="pug">
  .result
    | Length
    input(v-bind:value="niceValue" readonly v-on:click="selectAll" ref="resultInput" width="1")
    button(v-on:click="copyResult") Copy
</template>

<script>
export default {
  name: 'result',
  computed: {
    niceValue: function() {
      // return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return this.value
    }
  },
  methods: {
    copyResult: function(ev) {
      this.$refs.resultInput.select()
      document.execCommand('copy')
    },
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
    width 10px
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

