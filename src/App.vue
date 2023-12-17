<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {loginStore} from "@/stores/login.store"
import { notificationStore } from './stores/notification.store';
import { useAuthStore } from './stores/auth.store';

import {validate_email, validate_password} from "@/utils/formValidation.util.js"


const userLogin = loginStore();
const auth = useAuthStore();
const notification = notificationStore();

console.log(auth.logedIn)

const onSubmit = async (e)=>{

  e.preventDefault()

  userLogin.setEmailErr(validate_email(userLogin.email));

  userLogin.setPassErr(validate_password(userLogin.password));

  userLogin.setLoginErr("");

  if(userLogin.emailErr|| userLogin.passErr) return;

  await userLogin.login();

}

</script>

<template>

<header>

</header>

<div class="Dahsboard">

</div>

<div class="login-form">
  <form @submit="onSubmit">
    <div>
      <input v-model="userLogin.email"  type="email" placeholder="Enter email">
    </div>
    <div>
      <input v-model="userLogin.password" type="password" placeholder="Enter password">
    </div>
    <div>
      <input type="submit" value="login">
      <button @click="auth.resetAuth">logout</button>
    </div>


  </form>
</div>

<div class="notification-board" v-if="auth.logedIn">
  {{ notification.list }}
</div>

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.notification-board{
  border:1px solid red;
  width:200px;
  height:300px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
