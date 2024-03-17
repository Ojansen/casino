<template>
  <nav class="bg-blue-400">
    <ul class="container mx-auto flex gap-6 py-6">
      <li><NuxtLink to="/">Home</NuxtLink> </li>
      <li><NuxtLink to="/shop">Shop</NuxtLink> </li>
      <li class="flex flex-col gap-1">
        <NuxtLink to="/piggybank">Piggy bank</NuxtLink>
        {{ piggyAmount }}
      </li>
      <li class="flex flex-col gap-1">
        <NuxtLink to="/scratch">Scratch</NuxtLink>
        <span>{{ timer.isTimerExpired ? Math.floor(timer.elapsedTime.value / 1000) : 'Ready'}}</span>
      </li>
      <li><NuxtLink to="/slot">Slots</NuxtLink> </li>
      <li class="ml-auto flex flex-col gap-1">
        <NuxtLink to="/account">Account</NuxtLink>
        {{ currency }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const user = useUser();
const timer = useTimer();
const piggyBank = usePiggybank();
const currency = computed(() => formatNumber(user.bankAmount.value));
const piggyAmount = computed(() => formatNumber(piggyBank.amount.value));
</script>