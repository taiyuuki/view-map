<template>
  <div
    class="q-ma-xs row"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    v-if="today.length > 0"
  >
    <q-card
      class="col-4 my-card three"
      v-for="item in today"
      :style="`background:transparent;color:${item.color}`"
      :key="item.name"
      :data-name="item.name"
      :data-count="item.count"
      square
    >
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useTodayCount } from 'src/stores/today';
import { storeToRefs } from 'pinia';
const { today } = storeToRefs(useTodayCount());
</script>

<style lang="scss">
.three {
  text-align: center;
  padding: 1%;
  &::before {
    content: attr(data-count);
    display: block;
    text-shadow: 0 0 2px #fff;
  }
  &::after {
    content: attr(data-name);
    display: block;
    font-size: 10px;
    color: white !important;
  }
}
</style>
