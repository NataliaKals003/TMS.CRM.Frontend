'use client';

import React, { createContext, useContext, useState } from 'react';

export enum HeaderModalType {
  generalAddNew,
  newDeal,
  newCustomer,
  newTask,
}

interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  modalType: HeaderModalType;
  buttonTitle?: string;
  setButtonTitle?: (buttonTitle: string) => void;
  setModalType: (type: HeaderModalType) => void;
  onOpenModalClick: () => void;
  isModalOpen: boolean;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('Dashboard');
  const [buttonTitle, setButtonTitle] = useState('Add New');
  const [modalType, setModalType] = useState(HeaderModalType.generalAddNew);
  const [isModalOpen, setModalOpen] = useState(false);

  const onOpenModalClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <HeaderContext.Provider value={{ title, buttonTitle, modalType, setTitle, setButtonTitle, setModalType, onOpenModalClick, isModalOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};
