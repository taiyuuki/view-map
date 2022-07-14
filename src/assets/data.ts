export interface ChinaAdd {
  noInfectH5: number;
  heal: number;
  importedCase: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
  noInfect: number;
  localConfirm: number;
  localConfirmH5: number;
  confirm: number;
  dead: number;
}

export interface ShowAddSwitch {
  importedCase: boolean;
  localinfeciton: boolean;
  confirm: boolean;
  nowSevere: boolean;
  dead: boolean;
  heal: boolean;
  nowConfirm: boolean;
  noInfect: boolean;
  localConfirm: boolean;
  all: boolean;
  suspect: boolean;
}

export interface Total {
  provinceLocalConfirm: number;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
  adcode: string;
  heal: number;
  wzz: number;
  confirm: number;
  mediumRiskAreaNum: number;
  nowConfirm: number;
  dead: number;
  showRate: boolean;
  showHeal: boolean;
}

export interface Today {
  local_confirm_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  wzz_add: string;
}

export interface Total {
  dead: number;
  heal: number;
  wzz: number;
  continueDayZeroLocalConfirmAdd: number;
  provinceLocalConfirm: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
  nowConfirm: number;
  showRate: boolean;
  showHeal: boolean;
  adcode: string;
  confirm: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
}

export interface Children {
  date: string;
  today: Today;
  total: Total;
  name: string;
  adcode: string;
}

export interface Today {
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  local_confirm_add: number;
}

export interface Total {
  dead: number;
  heal: number;
  mediumRiskAreaNum: number;
  continueDayZeroConfirmAdd: number;
  continueDayZeroConfirm: number;
  adcode: string;
  confirm: number;
  continueDayZeroLocalConfirmAdd: number;
  highRiskAreaNum: number;
  showRate: boolean;
  wzz: number;
  mtime: string;
  nowConfirm: number;
  provinceLocalConfirm: number;
  showHeal: boolean;
}

export interface Children {
  children: Children[];
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface AreaTree {
  total: Total;
  children: Children[];
  name: string;
  today: Today;
}

export interface ChinaTotal {
  showlocalinfeciton: number;
  local_acc_confirm: number;
  confirmAdd: number;
  localConfirmAdd: number;
  confirm: number;
  heal: number;
  noInfect: number;
  deadAdd: number;
  localConfirm: number;
  mRiskTime: string;
  suspect: number;
  importedCase: number;
  noInfectH5: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  nowConfirm: number;
  dead: number;
  showLocalConfirm: number;
  nowLocalWzz: number;
  mtime: string;
  nowSevere: number;
  localConfirmH5: number;
  localWzzAdd: number;
}

export interface Diseaseh5Shelf {
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
}

export interface LocalCityNCOVDataList {
  highRiskAreaNum: number;
  city: string;
  adcode: string;
  isUpdated: boolean;
  mtime: string;
  local_confirm_add: number;
  local_wzz_add: string;
  mediumRiskAreaNum: number;
  isSpecialCity: boolean;
  province: string;
  date: string;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  localCityNCOVDataList: LocalCityNCOVDataList[];
}

export interface ChinaAdd {
  noInfectH5: number;
  heal: number;
  importedCase: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
  noInfect: number;
  localConfirm: number;
  localConfirmH5: number;
  confirm: number;
  dead: number;
}

export interface ShowAddSwitch {
  importedCase: boolean;
  localinfeciton: boolean;
  confirm: boolean;
  nowSevere: boolean;
  dead: boolean;
  heal: boolean;
  nowConfirm: boolean;
  noInfect: boolean;
  localConfirm: boolean;
  all: boolean;
  suspect: boolean;
}

export interface Total {
  provinceLocalConfirm: number;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
  adcode: string;
  heal: number;
  wzz: number;
  confirm: number;
  mediumRiskAreaNum: number;
  nowConfirm: number;
  dead: number;
  showRate: boolean;
  showHeal: boolean;
}

export interface Today {
  local_confirm_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  wzz_add: string;
}

export interface Total {
  dead: number;
  heal: number;
  wzz: number;
  continueDayZeroLocalConfirmAdd: number;
  provinceLocalConfirm: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
  nowConfirm: number;
  showRate: boolean;
  showHeal: boolean;
  adcode: string;
  confirm: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
}

export interface Children {
  date: string;
  today: Today;
  total: Total;
  name: string;
  adcode: string;
}

export interface Today {
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  local_confirm_add: number;
}

export interface Total {
  dead: number;
  heal: number;
  mediumRiskAreaNum: number;
  continueDayZeroConfirmAdd: number;
  continueDayZeroConfirm: number;
  adcode: string;
  confirm: number;
  continueDayZeroLocalConfirmAdd: number;
  highRiskAreaNum: number;
  showRate: boolean;
  wzz: number;
  mtime: string;
  nowConfirm: number;
  provinceLocalConfirm: number;
  showHeal: boolean;
}

export interface Children {
  children: Children[];
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface AreaTree {
  total: Total;
  children: Children[];
  name: string;
  today: Today;
}

export interface ChinaTotal {
  showlocalinfeciton: number;
  local_acc_confirm: number;
  confirmAdd: number;
  localConfirmAdd: number;
  confirm: number;
  heal: number;
  noInfect: number;
  deadAdd: number;
  localConfirm: number;
  mRiskTime: string;
  suspect: number;
  importedCase: number;
  noInfectH5: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  nowConfirm: number;
  dead: number;
  showLocalConfirm: number;
  nowLocalWzz: number;
  mtime: string;
  nowSevere: number;
  localConfirmH5: number;
  localWzzAdd: number;
}

export interface Diseaseh5Shelf {
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
}

export interface LocalCityNCOVDataList {
  highRiskAreaNum: number;
  city: string;
  adcode: string;
  isUpdated: boolean;
  mtime: string;
  local_confirm_add: number;
  local_wzz_add: string;
  mediumRiskAreaNum: number;
  isSpecialCity: boolean;
  province: string;
  date: string;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  localCityNCOVDataList: LocalCityNCOVDataList[];
}
