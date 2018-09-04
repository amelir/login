<template>
  <form v-on:submit.prevent="login">
    <fieldset>
      <form-input name="email" label="Email" autocomplete="email" required/>
      <form-input name="password" type="password" label="Password" autocomplete="current-password" required/>
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
import { FormInput } from 'components';

export default {
  methods: {
    login(e){
      // Serialize data
      const data = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
      }

      // Make API call to login
      axios.post('/api/auth', data)
        .then(res => {
          // Parse token
          const token = JSON.parse(atob(res.data['access_token'].split('.')[1]));

          // Send user info to store
          this.$store.commit('accountLogin', {email: token.sub});

          // Cache token
          localStorage.setItem('authToken', res.data['access_token']);
        })
        .catch(err => {
          alert('Login failed.');
          console.error(err);
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
  @import 'components/settings.scss';

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
