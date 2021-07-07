import { BigNumber } from 'ethers';
import { useWeb3 } from '../web3';

import {
  OurTestToken,
} from '../assets/typechain';

import {
  useOurTestTokenContract,
} from './contracts';

import {
  useTokenName,
  useTokenSymbol,
  useTokenDecimals,
} from './token';

import {
  useUserBalance,
} from './balances';

export interface Data {
  contracts: {
    ourTestToken?: OurTestToken,
  },
  token: {
    name?: string,
    symbol?: string,
    decimals?: number,
  },
  user: {
    isTokenHolder?: boolean,
    balance?: BigNumber,
  },
};

function useSystemData() {
  const { account } = useWeb3();

  const ourTestTokenContract = useOurTestTokenContract();

  const tokenName = useTokenName(ourTestTokenContract);
  const tokenSymbol = useTokenSymbol(ourTestTokenContract);
  const tokenDecimals = useTokenDecimals(ourTestTokenContract);

  const userBalance = useUserBalance(ourTestTokenContract, account);

  const data: Data = {
    contracts: {
      ourTestToken: ourTestTokenContract,
    },
    token: {
      name: tokenName,
      symbol: tokenSymbol,
      decimals: tokenDecimals,
    },
    user: {
      isTokenHolder: userBalance.gt(0),
      balance: userBalance,
    },
  };

  return data;
}

export { useSystemData };
