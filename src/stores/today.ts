import { defineStore } from 'pinia';

export const useTodayCount = defineStore('today', {
  state: () => ({
    today: [] as li[],
  }),
});
