<template>
  <Button v-if="!message" type="primary" @click="loadMessage" :loading="loading">Load message</Button>
  <figure v-else class="text-monospace">{{ message }}</figure>
</template>
<script>
import payloadUrl from "../assets/payload.json?url";
import WrapperEventDispatcher from "../WrapperEventDispatcher";
import Button from "./Button.vue";

export default {
  components: {
    Button
  },
  data() {
    return {
      message: null,
      loading: false
    }
  },
  methods: {
    loadMessage() {
      this.loading = true;

      fetch(payloadUrl)
        .then((r) => r.json())
        .then((p) => {

          setTimeout(() => {
            this.message = p.message[this.$root.language];
            this.loading = false;
            WrapperEventDispatcher.dispatch(null, [{ name: this.message }]);
          }, 1000)

        });
    }
  }
};
</script>
