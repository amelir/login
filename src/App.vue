<template>
  <router-view></router-view>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Quicksand:500|Source+Sans+Pro:400,700');
  @import './settings.scss';

  body{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &, *{
      font-family: 'Source Sans Pro', sans-serif;
    }
  }
</style>
