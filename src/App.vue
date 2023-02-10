<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <NavigationBar />
      <SearchBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/header/NavigationBar";
import SearchBar from "./components//header/SearchBar";

export default {
  name: 'App',
  components: {
    NavigationBar,
    SearchBar,
  },
};
</script>

<style>
</style>
