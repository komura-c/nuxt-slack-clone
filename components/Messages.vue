<template>
  <div class="chats-container">
    <message />
  </div>
</template>

<script>
import Message from "~/components/Message.vue";
export default {
  components: {
    Message
  }
};
</script>

<style scoped>
.chats-container {
  padding: 16px;
}
</style>
