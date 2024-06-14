import axios from 'axios';
import { useWallet } from '@alephium/web3-react';
import { Button, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { IconWallet } from '@tabler/icons-react';

const ClaimFromFaucet = () => {
  const { account } = useWallet();
  const [addr, setAddr] = useState('');

  useEffect(() => {
    setAddr(account?.address);
  }, [account?.address]);
  const claimFromFaucet = async () => {
    if (addr === '') {
      notifications.show({
        title: 'Error!',
        message:
          'Connect your Alephium wallet or input your address above to claim testnet tokens.',
      });
      return;
    }
    try {
      const response = await axios.post('https://faucet.testnet.alephium.org/send', addr, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      console.log('Response:', response.data);
      notifications.show({
        title: 'Success!',
        message: `You will receive Alephium testnet tokens on ${addr}!`,
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
    <>
      <TextInput
        leftSection={<IconWallet />}
        value={addr}
        required
        withAsterisk
        description="Testnet Wallet Address"
        onChange={(event) => setAddr(event.currentTarget.value)}
      />{' '}
      <Button variant={'light'} onClick={claimFromFaucet}>
        Claim from Faucet
      </Button>
    </>
  );
};
export default ClaimFromFaucet;
