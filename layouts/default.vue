<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p>#general</p>
      <p>#random</p>
      <p>#random</p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.app-layout {
  margin: 0;
  display: flex;
}

.sidebar {
  width: 300px;
  background: #4a4141;
  height: 95vh;
  padding: 20px;
}

.sidebar p {
  color: #ddd;
  padding-top: 4px;
}

.main-content {
  width: 100%;
  background: #f1f1f1;
  height: 95vh;
}
</style>
