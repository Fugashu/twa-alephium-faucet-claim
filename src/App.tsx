import './App.css';
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { theme } from './theme.ts';
import { MantineProvider } from '@mantine/core';
import MainPage from './pages/main.page.tsx';
import { Notifications } from '@mantine/notifications';
function App() {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <AlephiumWalletProvider network={'testnet'}>
        <Notifications />
        <MainPage />
      </AlephiumWalletProvider>
    </MantineProvider>
  );
}

export default App;
