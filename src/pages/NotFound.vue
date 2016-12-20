<template lang="pug">
  .page#not-found-page
    h1 404
    h3 Page Not Found
    br
    router-link(to="/") Head Back to the Index
</template>

<script>
</script>

<style lang="stylus">
#not-found-page
  flex-grow 0
  text-align center
</style>
