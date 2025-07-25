
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Toast } from '../components/Toast';

interface ToastContextData {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);
  };

  const hideToast = () => {
    setVisible(false);
    setMessage('');
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={message} visible={visible} onHide={hideToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
