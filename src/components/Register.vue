<template>
  <form v-on:submit.prevent="register">
    <fieldset>
      <div class="buttons">
        <form-input name="fname" label="First Name" autocomplete="given-name" required/>
        <form-input name="lname" label="Last Name" autocomplete="family-name" required/>
      </div>
      <form-input name="username" label="Email" autocomplete="email" required/>
      <form-input name="password" label="Password" type="password" autocomplete="new-password" required/>
      <form-input name="password1" label="Confirm Password" type="password" autocomplete="new-password" required/>
      <div class="buttons inverse">
        <input type="submit" class="green main" value="Register"/>
        <router-link :to="{name: 'account_login'}" class="btn">Already registered?</router-link>
      </div>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';
import { FormInput } from 'components';

export default {
  methods: {
    register(e){
      // Serialize data
      const data = {
        firstName: e.target.elements.fname.value,
        lastName: e.target.elements.lname.value,
        email: e.target.elements.username.value,
        password: e.target.elements.password.value,
        confirmPassword: e.target.elements.password1.value
      }

      // Check if passwords match
      if(data.password !== data.confirmPassword){
        alert('Passwords do not match.');
        return;
      }

      // Make API call
      axios.post('/api/auth/register', data)
        .then(res => {
          alert('Registration complete. Please login to continue.');
        })
        .catch(err => {
          console.error(err);
          alert('Failed to register.');
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
