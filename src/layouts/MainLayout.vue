<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> 疫情可视化 </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          数据接口：<a class="text-white" href="https://news.qq.com/zt2020/page/feiyan.htm#/" target="_blank">腾讯新闻</a>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script lang="ts" setup>
import { ComponentInternalInstance, getCurrentInstance } from 'vue';
import { AxiosResponse } from 'axios';
import { useTodayCount } from 'src/stores/today';
import { useMapData } from 'src/stores/map';
import { geoCoordMap } from 'src/assets/geo';
import { Diseaseh5Shelf, Children } from 'src/assets/data';
import { useProvinceData } from 'src/stores/province';
import { usePieData } from 'src/stores/pie';
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const api = appContext.config.globalProperties.$api;
const today = useTodayCount();
const map = useMapData();
const province = useProvinceData();
const pie = usePieData();
api.get('/api/list').then((res: AxiosResponse) => {
  console.log(res.data.data);
  const diseaseh5Shelf: Diseaseh5Shelf = res.data.data.diseaseh5Shelf;

  // 今日数据
  today.$patch((state) => {
    state.today.push({
      name: '本土确诊',
      count: '+' + diseaseh5Shelf.chinaTotal.localConfirmAdd,
      color: 'rgb(229, 118, 49)',
    });
    state.today.push({
      name: '本土无症状',
      count: '+' + diseaseh5Shelf.chinaTotal.localWzzAdd,
      color: 'rgb(202, 63, 129)',
    });
    state.today.push({
      name: '确诊病例',
      count: '+' + diseaseh5Shelf.chinaTotal.confirmAdd,
      color: 'rgb(190, 33, 33)',
    });
    state.today.push({
      name: '现有本土确诊',
      count: diseaseh5Shelf.chinaTotal.localConfirm,
      color: 'rgb(229, 118, 49)',
    });
    state.today.push({
      name: '现有本土无症状',
      count: diseaseh5Shelf.chinaTotal.nowLocalWzz,
      color: 'rgb(202, 63, 129)',
    });
    state.today.push({
      name: '现有确诊病例',
      count: diseaseh5Shelf.chinaTotal.nowConfirm,
      color: 'rgb(190, 33, 33)',
    });
    state.today.push({
      name: '高风险地区',
      count: diseaseh5Shelf.chinaTotal.highRiskAreaNum,
      color: 'rgb(242, 58, 59)',
    });
    state.today.push({
      name: '中风险地区',
      count: diseaseh5Shelf.chinaTotal.mediumRiskAreaNum,
      color: 'rgb(229, 118, 49)',
    });
    state.today.push({
      name: '累计死亡',
      count: diseaseh5Shelf.chinaTotal.dead,
      color: 'rgb(78, 90, 101)',
    });
  });

  // 获取全国数据
  const mapData: Children[] = diseaseh5Shelf.areaTree[0].children;
  const data = [] as MapItem[];
  mapData.forEach((item) => {
    if (item.name in geoCoordMap) {
      data.push({
        name: item.name,
        value: geoCoordMap[item.name].concat(item.today.confirm),
        children: item.children,
      });
      province.$patch((state) => {
        state.provinceData.chirldren.unshift({
          地区: item.name,
          新增确诊: item.today.local_confirm_add,
          累计确诊: item.total.confirm,
          治愈: item.total.heal,
          死亡: item.total.dead,
        });
      });
    }
  });
  map.$patch((state) => {
    state.mapData = data;
  });

  // 获取累计数据（饼状图）
  pie.$patch((state) => {
    state.nowConfirm = diseaseh5Shelf.chinaTotal.nowConfirm;
    state.dead = diseaseh5Shelf.chinaTotal.dead;
    state.heal = diseaseh5Shelf.chinaTotal.heal;
  });
});
</script>
