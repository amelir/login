<template>
  <card/>
</template>

<script>
  import card from './components/card.vue';
  export default {
    components: {
      card
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:500|Source+Sans+Pro:400,700');

  body{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>
