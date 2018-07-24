<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  data: function(){
    console.log('hello');
    return {
      message: 'Hello!'
    }
  }
}
</script>

<style lang="scss" scoped>
  $red: rgb(194, 53, 53);

  h1{
    color: $red;
    transform: translate(10px);
  }
</style>
