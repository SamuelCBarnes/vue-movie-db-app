<template>
    <div class="flex">
      <router-link to="/">
        <img src="@/assets/images/vue-movie-logo.png" alt="Movie Application Logo" />
      </router-link>
      
      <ul class="flex mt-12">
        <li>
            <router-link to="/" class="ml-5">Movies</router-link>
        </li>
        <li>
            <router-link to="/actors" class="ml-5">Actors</router-link>
        </li>
        <li>
            <router-link to="/profile" class="ml-5">Profile</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>