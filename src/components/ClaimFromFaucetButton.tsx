import axios from 'axios';
import { useWallet } from '@alephium/web3-react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const ClaimFromFaucetButton = () => {
  const { account } = useWallet();
  const claimFromFaucet = async () => {
    if (!account?.address) {
      notifications.show({
        title: 'Error!',
        message: 'Connect your Alephium wallet to claim testnet tokens.',
      });
      return;
    }
    try {
      const response = await axios.post(
        'https://faucet.testnet.alephium.org/send',
        account.address,
        {
          headers: {
            'Content-Type': 'text/plain',
          },
        }
      );
      console.log('Response:', response.data);
      notifications.show({
        title: 'Success!',
        message: 'You will receive Alephium testnet tokens shortly!',
      });
    } catch (error) {
      console.error('Error sending faucet request:', error);
      notifications.show({
        title: 'Error!',
        message:
          'There was an error with the request! Try again later or use a different wallet address.',
      });
    }
  };
  return (
    <Button variant={'light'} onClick={claimFromFaucet}>
      Claim from Faucet
    </Button>
  );
};
export default ClaimFromFaucetButton;
