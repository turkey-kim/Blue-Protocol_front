import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const allNewsState = atom<any[]>({
  key: 'allNewsState',
  default: [],
});

export const recentNewsState = atom<any[]>({
  key: 'recentNewsState',
  default: [],
});

export const guideData = atom<any[]>({
  key: 'guideData',
  default: [],
});

export const guideList = atom<any[]>({
  key: 'guideList',
  default: [],
});

export const databaseData = atom<any[]>({
  key: 'databaseData',
  default: [],
});

export const databaseList = atom<any[]>({
  key: 'databaseList',
  default: [],
});

export const isMobileNavOpen = atom<boolean>({
  key: 'isMobileNavOpen',
  default: false,
});

export const textStartRef = atom<HTMLDivElement | null>({
  key: 'textStartRef',
  default: null,
});
