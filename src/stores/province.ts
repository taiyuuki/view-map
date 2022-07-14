import { defineStore } from 'pinia';

export const useProvinceData = defineStore('province', {
  state: () => ({
    provinceData: {
      name: '',
      chirldren: [] as ProvinceData[],
      value: [] as number[],
    },
  }),
  actions: {
    changeState(params: MapItem) {
      this.provinceData.chirldren.length = 0;
      this.provinceData.name = params.name;
      this.provinceData.value = params.value;
      params.children.forEach((item) => {
        if (!item.name.match(/境外/)) {
          this.provinceData.chirldren.push({
            地区: item.name,
            新增确诊: item.today.confirm,
            累计确诊: item.total.confirm,
            治愈: item.total.heal,
            死亡: item.total.dead,
          });
        }
      });
    },
  },
});
