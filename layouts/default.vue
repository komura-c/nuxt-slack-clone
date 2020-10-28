<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <li v-for="channel in channels" :key="channel.id">
        <nuxt-link :to="`/channels/${channel.id}`">{{
          channel.name
        }}</nuxt-link>
      </li>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";

export default {
  data() {
    return {
      channels: []
    };
  },
  mounted() {
    db.collection("channels")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.channels.push(doc.data());
        });
      });
  }
};
</script>

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

.sidebar p,
li {
  color: #ddd;
  padding-top: 4px;
  margin: 0;
}
.sidebar a {
  color: #ddd;
  text-decoration: none;
}

.main-content {
  width: 100%;
  background: #f1f1f1;
  height: 95vh;
}
</style>
