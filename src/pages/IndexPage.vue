<template>
  <q-page class="row justify-between" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
    <div class="col-3">
      <ThreeByThreeVue />
      <PieChartVue />
      <LineGraphVue />
    </div>
    <div class="col-6">
      <Suspense>
        <CenterMap />
      </Suspense>
    </div>
    <div class="col-3">
      <ListTableVue />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import ThreeByThreeVue from '@/components/ThreeByThree.vue';
import PieChartVue from '@/components/PieChart.vue';
import LineGraphVue from '@/components/LineGraph.vue';
import ListTableVue from '@/components/ListTable.vue';
const CenterMap = defineAsyncComponent(
  () => import('@/components/CenterMap.vue')
);
</script>
