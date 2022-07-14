<template>
  <div id="line-graph"></div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { AxiosResponse } from 'axios';
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const api = appContext.config.globalProperties.$api;
const options = {
  title: {
    top: 20,
    text: '新增趋势',
    subtext: '',
    x: 'center',
    textStyle: {
      color: '#000',
    },
  },
  xAxis: {
    data: [] as string[],
    label: {
      color: '#fff',
    },
  },
  yAxis: {},
  series: [
    {
      data: [] as (number | string)[],
      type: 'line',
      smooth: true,
      label: {
        color: '#fff',
      },
    },
  ],
  tooltip: {
    formater: (parmas: { data: number | string }) => {
      return parmas.data;
    },
  },
};
onMounted(() => {
  const lineGraph = echarts.init(
    document.getElementById('line-graph') as HTMLElement
  );
  lineGraph.resize({
    width: 'auto',
    height: 'auto',
  });
  api.get('/api/daily').then((res: AxiosResponse) => {
    const daily = res.data.data;
    console.log(daily);
    daily.forEach((item: { date: string; newConfirm: string | number }) => {
      options.series[0].data.push(item.newConfirm);
      options.xAxis.data.push(item.date);
    });

    lineGraph.setOption(options);
  });
});
</script>

<style>
#line-graph {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
