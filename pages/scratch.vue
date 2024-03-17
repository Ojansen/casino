<template>
  <div>
    <p v-if="!timer.isTimerExpired">Timer is running...</p>
    {{timer.isTimerExpired}} {{won}}
    <button @click="scratch.checkWin()" :disabled="won">Scratch!!!</button>
    <p v-if="scratch.hasWon">You won {{winAmount}}</p>
    <p>Elapsed Time: {{ Math.floor(timer.elapsedTime.value / 1000) }} seconds</p>
  </div>
</template>

<script setup lang="ts">
const timer = useTimer();
const scratch = useScratch();
const winAmount= computed(() => formatNumber(scratch.amount.value))
const won = computed(() => timer.isTimerExpired.value && !scratch.hasWon.value);
</script>