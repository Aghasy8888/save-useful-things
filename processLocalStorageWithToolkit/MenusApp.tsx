'use client';

import { useState } from 'react';
import { Header, MenusModal } from '@/components';
import useCloseModal from '@/hooks/useCloseModal';
import { ARMENIAN, MENU_NAMES, MENUS } from '@/constants';
import useGetItemFromStorage from '@/hooks/useGetItemFromStorage';
import useUpdateLocalStorage from '@/hooks/useUpdateLocalStorage';

const MenusApp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const [activeLanguage, setActiveLanguage] = useState(ARMENIAN);
  useCloseModal(modalIsOpen, setModalIsOpen);
  useGetItemFromStorage(MENUS);
  useGetItemFromStorage(MENU_NAMES);
  useUpdateLocalStorage();  

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      {modalIsOpen && (
        <MenusModal
          activeLanguageState={{activeLanguage, setActiveLanguage}}
        />
      )}
    </>
  );
};

export default MenusApp;
