<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";

export default {
  data() {
    return {
      text: null
    };
  },
  methods: {
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
</style>
