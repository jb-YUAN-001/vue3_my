<template>
  <div class="about">
    <h2>🐇 关于我</h2>
    <div class="about-card">
      <div class="avatar">🎨</div>
      <div class="bio">
        <p>你好！我是一只喜欢设计的兔子，本科就读于数字媒体艺术专业。</p>
        <p>日常里，我喜欢用插画记录生活，也用代码实现创意网页。</p>
        <p>我相信“设计是感性与理性的平衡”，希望我的作品能给你带来温暖和灵感。</p>
        <p>✨ 擅长：插画 / 前端开发 / UI设计</p>
        <p>📬 欢迎交流合作～</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  animation: fadeUp 0.5s ease;
}
.about h2 {
  font-size: 2.4rem;
  color: #3d2c4a;
}
.about-card {
  display: flex;
  gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  align-items: center;
  flex-wrap: wrap;
}
.avatar {
  font-size: 6rem;
  background: #f0e6d6;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bio {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}
.bio p {
  margin: 0.6rem 0;
}
</style>