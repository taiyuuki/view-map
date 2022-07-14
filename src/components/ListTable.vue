<template>
  <div class="q-py-md">
    <q-table
      :rows="provinceData.chirldren"
      :columns="columns"
      row-key="name"
      color="primary"
      dense
      rows-per-page-label="每页显示："
      :pagination="{ rowsPerPage: 0 }"
      table-style="height:80vh;overflow:auto;"
      table-header-class="list-header"
    />
  </div>
</template>

<script setup lang='ts'>
import { useProvinceData } from 'src/stores/province';
import { storeToRefs } from 'pinia';
// const province = useProvinceData();
let { provinceData } = storeToRefs(useProvinceData());
type AlignType = 'left' | 'center' | 'right' | undefined;
let columns = [
  {
    name: '地区',
    align: 'left' as AlignType,
    label: '地区',
    field: '地区',
  },
  {
    name: '新增确诊',
    align: 'center' as AlignType,
    label: '新增确诊',
    field: '新增确诊',
    sortable: true,
  },
  {
    name: '累计确诊',
    align: 'center' as AlignType,
    label: '累计确诊',
    field: '累计确诊',
    sortable: true,
  },
  {
    name: '治愈',
    align: 'center' as AlignType,
    label: '治愈',
    field: '治愈',
    sortable: true,
  },
  {
    name: '死亡',
    align: 'center' as AlignType,
    label: '死亡',
    field: '死亡',
    sortable: true,
  },
];
</script>

<style lang="scss">
.list-header {
  color: #fff;
  background-color: $primary;
}
</style>
