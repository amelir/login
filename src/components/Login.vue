<template>
  <div class="card">
    <div class="brand">amelir</div>
    <form v-on:submit.prevent="login">
      <fieldset>
        <input-field name="username" label="Email" required/>
        <input-field name="password" type="password" label="Password" required/>
        <input type="submit" value="Login" class="green main"/>
        <div class="buttons">
          <div class="btn red" tabindex="0">Reset Password</div>
          <router-link to="/register" class="btn">Create Account</router-link>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import inputField from './inputField.vue';

export default {
  methods: {
    login(e){
      // Serialize data
      const data = {
        email: e.target.elements.username.value,
        password: e.target.elements.password.value
      }

      // Make API call to login
      axios.post('/api/auth', data)
        .catch(err => {
          alert('Login failed.');
          console.error(err);
        })
        .then(res => {
          // Cache token
          localStorage.setItem('authToken', res.data['access_token']);
          alert('Login successful.');
        });
    }
  },

  components: {
    inputField
  },
  
  updated(){
    // Focus first input after change
    document.querySelector('input').focus();
  },

  mounted(){
    document.querySelector('input').focus();
  }
}
</script>

<style lang="scss">
  @import '../settings.scss';
  
  input[type=submit], input[type=button], button, .btn{
    display: inline-block;
    padding: 0.75em 1em;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: #fff;
    color: #aaa;
    font-size: 14px;
    font-weight: 700;
    transition: color 0.1s linear, background-color 0.1s linear;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    align-items: flex-start;
    text-align: center;
    user-select: none;
    white-space: pre;
    -webkit-tap-highlight-color: rgba(#000, 0); ;

    &.main{
      border-color: #aaa;
    }

    &:hover, &:focus, &:active{
      background-color: #eaeaea;
      color: #fff;

      &.main{
        border-color: #eaeaea;
      }
    }

    &.green{
      color: $green;

      &:hover, &:focus, &:active{
        background-color: $green;
        color: #fff;
      }

      &.main{
        border-color: $green;
      }
    }

    &.blue{
      color: $blue;

      &:hover, &:focus, &:active{
        background-color: $blue;
        color: #fff;
      }

      &.main{
        border-color: $blue;
      }
    }

    &.red{
      color: $red;

      &:hover, &:focus, &:active{
        background-color: $red;
        color: #fff;
      }

      &.main{
        border-color: $red;
      }
    }
  }

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

    & > *{
      margin-top: 10px;
    }
  }

  :not(.buttons) > input[type=submit]{
    width: 100%;
  }

  .buttons{
    display: flex;
    position: relative;
    justify-content: space-between;

    &.inverse{
      flex-direction: row-reverse;
    }

    .input{
      width: calc(50% - 7px);
      margin: 0;
    }
  }
</style>
