import React from 'react';
import { ThemeProvider } from './ThemProvider';
import { ChatBoxProvider } from './ChatBoxContext';
import { Toaster } from 'react-hot-toast';

interface AppContextProps {
  children: React.ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return (
    <ThemeProvider>
      <ChatBoxProvider>
        {children}
      </ChatBoxProvider>

      <Toaster />
    </ThemeProvider>
  );
}