import React from 'react';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
