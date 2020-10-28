<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <li v-for="channel in channels" :key="channel.id">
        <nuxt-link :to="`/channels/${channel.id}`">{{
          channel.name
        }}</nuxt-link>
      </li>
      <p v-if="isAuthenticated" class="logout" v-on:click="logout">
        ログアウト
      </p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db, firebase } from "~/plugins/firebase";

import { mapActions } from "vuex";

export default {
  data() {
    return {
      channels: []
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    ...mapActions(["setUser"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null);
          window.alert("ログアウトに成功！");
        })
        .catch(e => {
          window.alert("ログアウトに失敗しました");
          console.log(e);
        });
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser(user);
        db.collection("users")
          .doc(user.uid)
          .set({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          });
      }
    });
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

.logout {
  position: absolute;
  bottom: 10px;
  cursor: pointer;
}
</style>
