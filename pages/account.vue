<template>
  <div>
    <h1>Balance {{currency }}</h1>
  </div>
</template>

<script setup lang="ts">
const user = useUser();
const currency = formatNumber(user.bankAmount.value);
</script>