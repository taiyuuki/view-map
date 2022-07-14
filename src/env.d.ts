/* eslint-disable */
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

type LiItem = {
  name: string;
  count: number | string;
  color: string;
};

type MapItem = {
  name: string;
  value: number[];
  children: import('src/assets/data').Children[];
};

type ProvinceData = {
  地区: string;
  新增确诊: number | string;
  累计确诊: number | string;
  治愈: number | string;
  死亡: number | string;
};
