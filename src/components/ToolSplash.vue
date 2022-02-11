<template>
  <button type="button" @click="count++" class="border-2 border-cyan-800 bg-cyan-200 rounded px-2 py-1 shadow text-cyan-900">Count is: {{ count }}   <loading-indicator class="w-4 h-4"></loading-indicator>
</button>
</template>
<script setup>
import LoadingIndicator from "./LoadingIndicator.vue"
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
