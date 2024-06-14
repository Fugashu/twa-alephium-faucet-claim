import { Container, Stack, Text, Title } from '@mantine/core';
import WalletConnectButton from '../components/WalletConnectButton.tsx';
import ClaimFromFaucetButton from '../components/ClaimFromFaucetButton.tsx';
import ConnectedAddr from '../components/ConnectedAddr.tsx';

const MainPage = () => {
  return (
    <Container fluid>
      <Stack gap={'xl'} justify={'center'}>
        <Stack align={'center'}>
          <Title c={'white'}>TWAlph</Title>
          <Text c={'dimmed'}>Claim Alephium Testnet tokens to your wallet.</Text>
        </Stack>
        <WalletConnectButton />
        <ConnectedAddr />
        <ClaimFromFaucetButton />
      </Stack>
    </Container>
  );
};
export default MainPage;
