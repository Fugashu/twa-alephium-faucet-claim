import { Center, Container, Stack, Text, Title } from '@mantine/core';
import WalletConnectButton from '../components/WalletConnectButton.tsx';
import ClaimFromFaucet from '../components/ClaimFromFaucet.tsx';
import { IconBrandGithub } from '@tabler/icons-react';

const MainPage = () => {
  return (
    <Container>
      <Stack gap={'xl'} justify={'center'}>
        <Stack align={'center'}>
          <Title c={'white'}>TWAlph</Title>
          <Text c={'dimmed'}>
            Claim Alephium Testnet tokens to your wallet. <br />
            Connect your wallet or paste your testnet account wallet address below.
          </Text>
        </Stack>
        <WalletConnectButton />
        <ClaimFromFaucet />
        <Center>
          <a
            style={{ textDecoration: 'none', color: 'inherit' }}
            href={'https://github.com/Fugashu/twa-alephium-faucet-claim'}
          >
            <IconBrandGithub />
          </a>
        </Center>
      </Stack>
    </Container>
  );
};
export default MainPage;
