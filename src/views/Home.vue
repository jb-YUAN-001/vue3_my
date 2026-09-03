<template>
  <div class="home">
    <section class="hero">
      <h2>欢迎来到我的小站</h2>
      <p class="tagline">我是一只会网站开发的兔子 🐇</p>
      <p class="desc">喜欢把日常灵感变成有趣的网页与插画</p>
    </section>

    <section class="categories">
      <h3>探索我的世界</h3>
      <div class="category-tags">
        <span 
          v-for="cat in categories" 
          :key="cat.name"
          :class="['tag', { active: activeCategory === cat.name }]"
          @click="activeCategory = cat.name"
        >
          {{ cat.icon }} {{ cat.name }}
        </span>
      </div>
      <div class="category-content">
        <p v-if="activeCategory === '插画'">🎨 这里展示我绘制的各种插画作品，有可爱动物、风景和幻想主题。</p>
        <p v-else-if="activeCategory === '网页'">💻 我开发的响应式网页、交互原型和创意小工具。</p>
        <p v-else-if="activeCategory === '生活'">☕ 日常灵感碎片，旅行、咖啡、阅读与手账。</p>
        <p v-else>选择一个分类，了解我的创作方向。</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categories = [
  { name: '插画', icon: '🎨' },
  { name: '网页', icon: '💻' },
  { name: '生活', icon: '☕' }
];
const activeCategory = ref('插画');
</script>

<style scoped>
.home {
  animation: fadeUp 0.5s ease;
}
.hero {
  text-align: center;
  padding: 2rem 0;
}
.hero h2 {
  font-size: 2.8rem;
  color: #3d2c4a;
}
.tagline {
  font-size: 1.8rem;
  color: #6c5b7b;
  font-weight: 600;
}
.desc {
  font-size: 1.2rem;
  color: #555;
  margin-top: 0.5rem;
}
.categories {
  margin-top: 3rem;
  text-align: center;
}
.category-tags {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 1.5rem 0;
}
.tag {
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  background: #eee;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}
.tag.active {
  background: #6c5b7b;
  color: #fff;
}
.tag:hover {
  transform: scale(1.05);
}
.category-content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>