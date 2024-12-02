import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { EMPTY_ARRAY } from '@/constants';

interface IGeneralState {
  menus: IMenu[] | null;
  menuNames: string[] | null;
}

// Initial state
const initialState: IGeneralState = {
  menus: null,
  menuNames: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setMenus(
      state,
      {
        payload: { data, parent },
      }: { payload: { data: IMenu; parent?: string } }
    ) {
      if (state.menus === null) state.menus = [];
      if (state.menuNames === null) state.menuNames = [];
      if (parent) {
        const targetMenu = (state.menus as IMenu[]).find(
          (m) => m.name === parent
        );
        (targetMenu as IMenu).children = [
          data,
          ...(targetMenu as IMenu).children,
        ];
      } else {
        state.menus = [data, ...state.menus];
      }

      state.menuNames = [...state.menuNames, data.name];
    },
    setDataFromStorage(
      state,
      {
        payload: { data, itemName },
      }: { payload: { data: unknown | IMenu[]; itemName: string } }
    ) {
      if (!data) return state;
      //@ts-expect-error 'string' can be used to index state
      state[itemName] = data;
    },
  },
});

export const {
  removeMenu,
  setDataFromStorage,
  setMenus,
  replaceMenus,
  editMenu,
} = generalSlice.actions;

export const selectMenus = (state: RootState) => state.generalSlice.menus;
export const selectMenuNames = (state: RootState) =>
  state.generalSlice.menuNames;

export default generalSlice.reducer;
