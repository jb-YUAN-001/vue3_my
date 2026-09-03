<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  background: #f9f7f4;
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5.5rem 1rem 2rem;
}

@media (max-width: 640px) {
  main {
    padding-top: 5rem;
  }
}
</style>