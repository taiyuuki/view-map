<template>
  <div id="center-map"></div>
</template>

<script setup lang='ts'>
import { onMounted, toRaw } from 'vue-demi';
import { useMapData } from 'src/stores/map';
import { useProvinceData } from 'src/stores/province';
import { storeToRefs } from 'pinia';
import * as echarts from 'echarts';
import mapJson from 'src/assets/map.json';

const { mapData } = storeToRefs(useMapData());
const province = useProvinceData();
await new Promise((resolve) => {
  if (mapData.value.length > 0) {
    resolve(mapData);
  }
});

onMounted(() => {
  const data = toRaw(mapData.value);
  const map = echarts.init(
    document.getElementById('center-map') as HTMLElement
  );
  map.showLoading();
  echarts.registerMap(
    'china',
    mapJson as Parameters<typeof echarts.registerMap>[1]
  );
  map.hideLoading();
  const option = {
    title: {
      top: 20,
      text: '今日新增病例分布',
      subtext: '',
      x: 'center',
      textStyle: {
        color: '#ccc',
      },
    },
    geo: {
      map: 'china',
      aspectScale: 0.75, //长宽比
      zoom: 1.1,
      roam: false,
      emphasis: {
        itemStyle: {
          areaColor: '#2AB8FF',
          borderWidth: 0,
          color: 'green',
          label: {
            show: true,
          },
        },
      },
      itemStyle: {
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: '#35a2ff', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#014a88', // 100% 处的颜色
            },
          ],
          globalCoord: true, // 缺省为 false
        },
        shadowColor: 'rgb(58,115,192)',
        shadowOffsetX: 10,
        shadowOffsetY: 11,
      },
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',

            borderColor: 'rgba(0, 10, 52, 1)',
            opacity: 0,
            label: {
              show: true,
              color: '#009cc9',
            },
          },
        },
      ],
    },
    series: [
      {
        type: 'map',
        roam: false,
        colorBy: 'data',
        label: {
          show: false,
          color: '#fff',
          fontSize: 10,
        },
        emphasis: {
          label: {
            color: 'inherit',
            itemStyle: {
              areaColor: 'rgb(46,229,206)',
              borderWidth: 0.1,
            },
          },
          scale: true,
          itemStyle: {
            areaColor: '#9C27B0',
            color: '#9C27B0',
          },
        },
        select: {
          label: {
            color: '#fff',
          },
          itemStyle: {
            areaColor: '#9C27B0',
            color: '#9C27B0',
          },
        },

        itemStyle: {
          borderColor: 'rgb(147, 235, 248)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: '#35a2ff', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#014a88', // 100% 处的颜色
              },
            ],
            globalCoord: true, // 缺省为 false
          },
        },
        zoom: 1.1,
        map: 'china',
        data: data,
      },
      {
        name: 'Add',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [50, 50],
        label: {
          show: true,
          color: '#fff',
          fontSize: 9,
          formatter(parmas: { color: string; value: number[] }) {
            return parmas.value[2];
          },
        },
        itemStyle: {
          color(parmas: { color: string; value: number[] }) {
            if (parmas.value[2] === 0) {
              return '#26A69A';
            } else if (parmas.value[2] > 1000) {
              return '#C10015';
            } else {
              return '#F2C037';
            }
          }, //标志颜色
        },
        data: data,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        zlevel: 1,
      },
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderColor: '#1976D2',
      textStyle: {
        color: '#fff',
      },
      formatter: function (params: { name: string; value: number[] }) {
        if (typeof params.value[2] == 'undefined') {
          return params.name;
        } else {
          return `${params.name}今日新增${params.value[2]}例`;
        }
      },
    },
  };
  map.setOption(option, true);
  map.on('click', (params) => {
    province.changeState(params.data as MapItem);
  });
});
</script>

<style lant="scss">
#center-map {
  width: 100%;
  height: 100%;
}
</style>
