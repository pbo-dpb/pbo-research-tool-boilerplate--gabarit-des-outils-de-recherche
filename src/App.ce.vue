<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ToolSplash />
</template>

<script>
import ToolSplash from './components/ToolSplash.vue'

const language = document.documentElement.lang;

export default {
  data() {
    return {
      language: language,
    };
  },
  components: {
    ToolSplash,
    
  }
};
</script>
<style>
@import "./index.css";
</style>
