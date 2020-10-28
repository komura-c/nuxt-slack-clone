<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout">
      <chatForm />
    </div>
  </div>
</template>

<script>
import Messages from "~/components/Messages.vue";
import ChatForm from "~/components/ChatForm.vue";
export default {
  components: {
    Messages,
    ChatForm
  }
};
</script>

<style>
.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  height: 10%;
}
</style>
