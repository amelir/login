<template>
  <div class="center">
    <div class="card">
      <div class="brand">amelir</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    // Focus first input after change
    document.querySelector('input').focus();
  },

  updated(){
    // Focus first input after change
    document.querySelector('input').focus();
  }
}
</script>


<style lang="scss" scoped>
  @import 'components/colors.scss';

  .center{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card{
    background-color: #fff;
    margin: auto;
    padding: 1rem;
    width: 100%;
    max-width: 25em;
    border-radius: 10px;
    box-shadow: 0 4px 90px 4px rgba(#000, 0.18);
    box-sizing: border-box;
  }

  .brand{
    font-size: 38px;
    user-select: none;
    text-align: center;
    margin-bottom: 1rem;
  }
</style>
