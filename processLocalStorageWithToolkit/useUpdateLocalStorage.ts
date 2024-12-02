'use client';

import { useEffect } from 'react';
import { EMPTY_ARRAY, MENUS, MENU_NAMES } from '@/constants';
import { selectMenuNames, selectMenus } from '@/redux/features/generalSlice';
import { useAppSelector } from '@/redux/hooks';

const useUpdateLocalStorage = () => {
  const menus = useAppSelector(selectMenus);
  const menuNames = useAppSelector(selectMenuNames);

  useEffect(() => {
    if (menus) {      
      localStorage.setItem(MENUS, JSON.stringify(menus));
    }
    if (menuNames) {
      localStorage.setItem(MENU_NAMES, JSON.stringify(menuNames));
    }
  }, [JSON.stringify(menus), JSON.stringify(menuNames)]);
};

export default useUpdateLocalStorage;
