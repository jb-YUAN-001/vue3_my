<template>
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="logo">🐰 小站</h1>
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path" active-class="active" exact-active-class="active">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <label class="mobile-nav-label">
        <span class="sr-only">选择页面</span>
        <select :value="currentPath" aria-label="选择页面" @change="handleNavigation">
          <option v-for="item in navItems" :key="item.path" :value="item.path">
            {{ item.name }}
          </option>
        </select>
      </label>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navItems = [
  { path: '/Home', name: '首页' },
  { path: '/about', name: '关于我' },
  { path: '/works', name: '作品集' },
  { path: '/blog', name: '小站' },
  { path: '/contact', name: '联系' }
];

const currentPath = computed(() => route.path);

const handleNavigation = (event: Event) => {
  const path = (event.target as HTMLSelectElement).value;
  router.push(path);
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 0.8rem 0;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
.logo {
  font-size: 1.6rem;
  margin: 0;
  color: #6c5b7b;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 20px;
  transition: background 0.2s, color 0.2s;
}
.nav-links a:hover {
  background: #f0e6d6;
}
.nav-links a.active {
  background: #6c5b7b;
  color: #fff;
}
.mobile-nav-label {
  display: none;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 640px) {
  .navbar {
    padding: 0.65rem 0;
  }
  .nav-container {
    gap: 1rem;
  }
  .logo {
    font-size: 1.35rem;
    flex-shrink: 0;
  }
  .nav-links {
    display: none;
  }
  .mobile-nav-label {
    display: block;
    flex: 1;
  }
  .mobile-nav-label select {
    width: 100%;
    min-height: 2.5rem;
    padding: 0.45rem 2.25rem 0.45rem 0.75rem;
    border: 1px solid #ddd4e4;
    border-radius: 8px;
    background: #fff;
    color: #333;
    font: inherit;
    cursor: pointer;
  }
}
</style>