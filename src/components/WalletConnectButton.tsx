import { AlephiumConnectButton } from '@alephium/web3-react';
import { Button } from '@mantine/core';

const WalletConnectButton = () => {
  return (
    <AlephiumConnectButton.Custom>
      {({ isConnected, disconnect, show }) => {
        return isConnected ? (
          <Button onClick={disconnect}>Disconnect</Button>
        ) : (
          <Button onClick={show}>Connect</Button>
        );
      }}
    </AlephiumConnectButton.Custom>
  );
};
export default WalletConnectButton;
