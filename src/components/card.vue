<template>
  <div class="card">
    <div class="brand">amelir</div>
    <form v-if="!registerForm" v-on:submit.prevent="login" key="login">
      <fieldset>
        <input-field name="username" label="Email" required/>
        <input-field name="password" type="password" label="Password" required/>
        <input type="submit" value="Login" class="green main"/>
        <div class="buttons">
          <div class="btn red" tabindex="0">Reset Password</div>
          <input type="button" v-on:click="toggleRegister" value="Register">
        </div>
      </fieldset>
    </form>
    <form v-else v-on:submit.prevent="register" key="register">
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
          <input type="button" v-on:click="toggleRegister" value="Already registered?"/>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import inputField from './inputField.vue';

export default {
  data(){
    return {
      registerForm: false
    }
  },

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
    },

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
          // Switch back to login
          this.registerForm = false;

          alert('Registration complete. Please login to continue.');
        })
        .catch(err => {
          console.error(err);
          alert('Failed to register.');
        });

    },

    toggleRegister(){
      this.registerForm = !this.registerForm;
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
