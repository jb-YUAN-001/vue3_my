<template>
  <div class="works">
    <h2>🎨 作品集</h2>
    <div class="filter-bar">
      <button 
        v-for="cat in filterOptions" 
        :key="cat"
        @click="activeFilter = cat"
        :class="['filter-btn', { active: activeFilter === cat }]"
      >
        {{ cat }}
      </button>
    </div>
    <div class="work-grid">
      <div v-for="work in filteredWorks" :key="work.id" class="work-card">
        <div class="work-thumb">{{ work.title }}</div>
        <div class="work-info">
          <h3>{{ work.title }}</h3>
          <p>{{ work.desc }}</p>
          <span class="tag">{{ work.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Work {
  id: number;
  title: string;
  desc: string;
  category: string;
}

const works: Work[] = [
  { id: 1, title: '森林童话', desc: '水彩风格插画', category: '插画' },
  { id: 2, title: '个人博客', desc: '极简响应式设计', category: '网页' },
  { id: 3, title: '咖啡时光', desc: '日常速写', category: '生活' },
  { id: 4, title: '星空城市', desc: '夜景数字绘画', category: '插画' },
  { id: 5, title: '在线工具', desc: 'Vue3 + TS 开发', category: '网页' },
  { id: 6, title: '旅行手账', desc: '图文记录', category: '生活' },
  { id: 7, title: '动物朋友', desc: '可爱角色设计', category: '插画' },
  { id: 8, title: '个人作品', desc: '本站就是我的作品', category: '网页' }
];

const filterOptions = ['全部', '插画', '网页', '生活'];
const activeFilter = ref('全部');

const filteredWorks = computed(() => {
  if (activeFilter.value === '全部') return works;
  return works.filter(w => w.category === activeFilter.value);
});
</script>

<style scoped>
.works {
  animation: fadeUp 0.5s ease;
}
.filter-bar {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 0.5rem 1.5rem;
  border: none;
  background: #eee;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}
.filter-btn.active {
  background: #6c5b7b;
  color: #fff;
}
.filter-btn:hover {
  transform: scale(1.03);
}
.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.work-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}
.work-card:hover {
  transform: translateY(-6px);
}
.work-thumb {
  height: 150px;
  background: #e8e0d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  color: #6c5b7b;
}
.work-info {
  padding: 1rem;
}
.work-info h3 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
}
.work-info p {
  margin: 0 0 0.5rem;
  color: #666;
  font-size: 0.9rem;
}
.work-info .tag {
  display: inline-block;
  background: #f0e6d6;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #6c5b7b;
}
</style>