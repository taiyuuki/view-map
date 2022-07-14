import { defineStore } from 'pinia';

export const useMapData = defineStore('map', {
  state: () => ({
    mapData: [] as MapItem[],
  }),
});
