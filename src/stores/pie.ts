import { defineStore } from 'pinia';

export const usePieData = defineStore('pie-data', {
  state: () => ({
    nowConfirm: 0 as number,
    dead: 0 as number,
    heal: 0 as number,
  }),
});
