<template>
  <div class="center">
    <div class="card">
      <div class="brand">amelir</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'components/settings.scss';

  .center{
    padding: 0;
  }

  .card{
    background-color: #fff;
    margin: 5em auto 2em auto;
    padding: 1rem;
    width: 100%;
    max-width: 28em;
    border-radius: 10px;
    box-shadow: 0 4px 90px 4px rgba(#000, 0.18);
    box-sizing: border-box;
    transition: all 0.2s ease;

    @media screen and (max-width: 35em){
      &{
        box-shadow: none;
        margin-top: 4em;
      }
    }
  }

  .brand{
    font-size: 38px;
    user-select: none;
    text-align: center;
    margin-bottom: 1rem;
  }
</style>
