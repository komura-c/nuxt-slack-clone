<template>
  <div class="input-container">
    <textarea
      v-model="text"
      v-on:click="openLoginModal"
      v-on:keydown.enter="addMessage"
    ></textarea>
    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <div class="image-container">
        <img src="~/assets/google_sign_in.png" v-on:click="login" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db, firebase } from "~/plugins/firebase";

import { mapActions } from "vuex";

import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

export default {
  data() {
    return {
      dialogVisible: false,
      text: null
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    openLoginModal() {
      this.dialogVisible = true;
    },
    addMessage() {
      if (this.keyDownedForJPConversion(event)) {
        return;
      }
      const channelId = this.$route.params.id;
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
          text: this.text,
          createdAt: new Date().getTime(),
          user: {
            name: "komura_c",
            thumbnail:
              "https://pbs.twimg.com/profile_images/1020302875229007872/nvfnS9YM_400x400.jpg"
          }
        })
        .then(docRef => {
          docRef.set({ id: docRef.id }, { merge: true });
          this.text = null;
        });
    },
    keyDownedForJPConversion(event) {
      const codeForConversion = 229;
      return event.keyCode === codeForConversion;
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          this.setUser(user);
          console.log(this.$store.state.user);
          this.dialogVisible = false;
        })
        .catch(error => {
          window.alert(error);
        });
    }
  }
};
</script>

<style>
.input-container {
  padding: 10px;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}

.image-container {
  width: 80%;
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  cursor: pointer;
}
</style>
