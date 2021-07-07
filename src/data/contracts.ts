import { useState, useEffect } from 'react';
import { useWeb3 } from '../web3';
import { useAddresses } from '../web3/chains';
import {
  OurTestToken,
  OurTestToken__factory,
} from '../assets/typechain';

const useOurTestTokenContract = () => {
  const { chainId, signerOrProvider } = useWeb3();
  const addresses = useAddresses(chainId);
  const [ourTestTokenContract, setOurTestTokenContract] = useState<OurTestToken>();

  useEffect(() => {
    if (!chainId || !addresses.ourTestToken || !signerOrProvider) {
      setOurTestTokenContract(undefined);
      return;
    }

    setOurTestTokenContract(OurTestToken__factory.connect(addresses.ourTestToken, signerOrProvider));
  }, [chainId, addresses, signerOrProvider]);

  return ourTestTokenContract;
}

export { 
  useOurTestTokenContract,
};
