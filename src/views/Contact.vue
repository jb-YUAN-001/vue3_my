<template>
  <div class="contact">
    <h2>📬 联系我</h2>
    <div class="contact-wrapper">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label>姓名</label>
          <input type="text" v-model="form.name" required placeholder="你的名字" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" v-model="form.email" required placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label>消息</label>
          <textarea v-model="form.message" required rows="4" placeholder="想对我说什么？"></textarea>
        </div>
        <button type="submit" class="submit-btn">发送 ✉️</button>
      </form>
      <div class="social-info">
        <p>✨ 也可以通过以下方式找到我：</p>
        <div class="social-links">
          <span>🐦 Twitter: @rabbit_design</span>
          <span>📷 Instagram: @rabbit.art</span>
          <span>📧 Email: hello@rabbit.work</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  alert(`感谢留言，${form.name}！我会尽快回复你。`);
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>

<style scoped>
.contact {
  animation: fadeUp 0.5s ease;
}
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
}
@media (max-width: 720px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
.contact-form {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.form-group {
  margin-bottom: 1.2rem;
}
.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #3d2c4a;
}
.form-group input,
.form-group textarea {
  width: stretch;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 1rem;
  transition: border 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #6c5b7b;
}
.submit-btn {
  background: #6c5b7b;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #5a4a6a;
}
.social-info {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
  font-size: 1.05rem;
}
</style>