<template>
  <div>
    <button @click="piggyBank.cashOut()">Cash out {{ formatted }}</button>
  </div>
</template>

<script setup lang="ts">
const piggyBank = usePiggybank();
const formatted = computed(() => formatNumber(piggyBank.amount.value));
</script>