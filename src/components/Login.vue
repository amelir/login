<template>
  <form v-on:submit.prevent="login">
    <fieldset>
      <form-input name="username" label="Email" required/>
      <form-input name="password" type="password" label="Password" required/>
      <input type="submit" value="Login" class="green main"/>
      <div class="buttons">
        <div class="btn red" tabindex="0">Reset Password</div>
        <router-link :to="{name: 'account_register'}" class="btn">Create Account</router-link>
      </div>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';
import FormInput from 'components/FormInput.vue';

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
    FormInput
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

<style lang="scss" scoped>
  @import 'components/colors.scss';

  fieldset > *{
    margin-top: 10px;
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
