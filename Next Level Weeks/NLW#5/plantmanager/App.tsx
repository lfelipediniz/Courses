import React from 'react';
import AppLoading from 'expo-app-loading'

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {
  const [ isFontLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  // Tela de splash enquanto as fontes não estiverem carregadas
  if (!isFontLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
