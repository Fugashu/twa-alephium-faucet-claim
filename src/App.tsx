import './App.css';
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { theme } from './theme.ts';
import { MantineProvider } from '@mantine/core';
import WalletConnectButton from './components/WalletConnectButton.tsx';
function App() {
  return (
    <MantineProvider theme={theme}>
      <AlephiumWalletProvider network={'testnet'}>
        <WalletConnectButton />
      </AlephiumWalletProvider>
    </MantineProvider>
  );
}

export default App;
