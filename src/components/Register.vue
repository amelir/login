<template>
  <div class="card">
    <form v-on:submit.prevent="register">
      <fieldset>
        <div class="buttons">
          <input-field name="fname" label="First Name" required/>
          <input-field name="lname" label="Last Name" required/>
        </div>
        <input-field name="username" label="Email" required/>
        <input-field name="password" label="Password" type="password" required/>
        <input-field name="password1" label="Confirm Password" type="password" required/>
        <div class="buttons inverse">
          <input type="submit" class="green main" value="Register"/>
          <router-link to="/" class="btn">Already registered?</router-link>
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

<style scoped>
  .card{
    padding-top: 2em;
  }
</style>
