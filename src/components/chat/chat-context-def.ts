import { createContext } from 'react';

type ChatContextValue = {
  languageMode: string;
  setLanguageMode: (value: string) => void;
  openSettings: () => void;
  openKeybinds: () => void;
  tourOpen: boolean;
  tourCompleted: boolean;
  openTour: () => void;
  closeTour: () => void;
  markTourCompleted: () => void;
};

export const ChatContext = createContext<ChatContextValue | null>(null);
