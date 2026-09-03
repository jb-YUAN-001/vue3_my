<template>
  <div class="blog">
    <h2>📝 小站 · 随笔</h2>
    <div class="blog-list">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="blog-item"
        @click="togglePost(post.id)"
      >
        <div class="blog-header">
          <span class="date">{{ post.date }}</span>
          <h3>{{ post.title }}</h3>
        </div>
        <p v-if="expandedId === post.id" class="blog-body">{{ post.content }}</p>
        <span class="expand-hint">{{ expandedId === post.id ? '收起' : '阅读更多' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: '关于设计中的留白', date: '2026-08-20', content: '留白不是空白，而是呼吸感。在视觉设计中，适当的留白能提升信息的可读性和高级感。' },
  { id: 2, title: '咖啡店灵感速写', date: '2026-08-15', content: '今天在街角咖啡店，看到窗外的光影变化，随手画了几张速写。生活总是最好的素材库。' },
  { id: 3, title: '从0到1搭建个人站', date: '2026-08-10', content: '用Vue3+TS+Vite搭建了这个站点，过程很享受。推荐大家也试试，自己动手收获很多。' }
];

const expandedId = ref<number | null>(null);

const togglePost = (id: number) => {
  expandedId.value = expandedId.value === id ? null : id;
};
</script>

<style scoped>
.blog {
  animation: fadeUp 0.5s ease;
}
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
}
.blog-item {
  background: #fff;
  padding: 1.2rem 1.8rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: background 0.2s;
}
.blog-item:hover {
  background: #faf8f5;
}
.blog-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}
.date {
  font-size: 0.85rem;
  color: #999;
}
.blog-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #3d2c4a;
}
.blog-body {
  margin: 1rem 0 0.5rem;
  color: #444;
  line-height: 1.6;
}
.expand-hint {
  display: inline-block;
  margin-top: 0.4rem;
  color: #6c5b7b;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>