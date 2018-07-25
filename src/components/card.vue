<template>
  <div class="card">
    <div class="brand">amelir</div>
    <form>
      <fieldset>
        <input-field name="username" label="Email"/>
        <input-field name="password" type="password" label="Password"/>
        <input type="submit" value="Login" class="green main"/>
        <div class="buttons">
          <div class="btn red" tabindex="0">Reset Password</div>
          <div class="btn" tabindex="0">Register</div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import inputField from './inputField.vue';
export default {
  components: {
    inputField
  }
}
</script>


<style lang="scss" scoped>
  @import '../style';

  .card{
    background-color: #fff;
    margin: auto;
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 90px 4px rgba(#000, 0.18);
  }

  .brand{
    font-size: 38px;
    font-family: 'Quicksand', sans-serif;
    user-select: none;
    text-align: center;
    color: $green;
    margin-bottom: 1rem;
  }

  form{
    padding: 0 15%;
    margin-bottom: 1rem;
  }

  fieldset{
    border: none;
    margin: 0;
    padding: 0;
  }

  input[type=submit]{
    width: 100%;
    margin-top: 10px;
  }

  .buttons{
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 10px;
    
    *{
      width: calc(50% - 5px);
      text-align: center;
    }
  }
</style>
