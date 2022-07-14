<template>
  <div id="pie-chart"></div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted, watch } from 'vue';
import { usePieData } from 'src/stores/pie';

const pie = usePieData();

onMounted(() => {
  const pieChart = echarts.init(
    document.querySelector('#pie-chart') as HTMLElement
  );
  watch(pie, () => {
    const options = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        bottom: 0,
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: '累计数据',
          type: 'pie',
          radius: '50%',
          data: [
            {
              value: pie.$state.nowConfirm,
              name: '现有确诊',
              lable: {
                color: '#fff',
              },
              itemStyle: {
                color: '#F2C037',
              },
            },
            {
              value: pie.$state.heal,
              name: '治愈',
              lable: {
                color: '#fff',
              },
              itemStyle: {
                color: '#26A69A',
              },
            },
            {
              value: pie.$state.dead,
              name: '死亡',
              lable: {
                color: '#fff',
              },
              itemStyle: {
                color: 'rgb(78, 90, 101)',
              },
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    pieChart.setOption(options);
  });
});
</script>

<style lang="scss">
#pie-chart {
  width: 100%;
  height: 250px;
}
</style>
