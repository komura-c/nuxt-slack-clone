<template>
  <div class="chats-container">
    <message v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script>
import Message from "~/components/Message.vue";
export default {
  props: ["messages"],
  components: {
    Message
  },
  mounted() {
    console.log(this.messages);
  }
};
</script>

<style scoped>
.chats-container {
  padding: 16px;
}
</style>
