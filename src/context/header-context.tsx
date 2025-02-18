'use client';

import React, { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  title: string;
  buttonTitle: string;
  setTitle: (title: string) => void;
  setButtonTitle: (buttonTitle: string) => void;
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
  const [isModalOpen, setModalOpen] = useState(false);

  const onOpenModalClick = () => {
    setModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <HeaderContext.Provider value={{ title, buttonTitle, setTitle, setButtonTitle, onOpenModalClick, isModalOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};
