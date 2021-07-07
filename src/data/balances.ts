import { useState, useEffect } from 'react';
import { BigNumber, utils } from 'ethers';
import {
  OurTestToken,
} from '../assets/typechain';

const useUserBalance = (ourTestToken: OurTestToken | undefined, account: string | undefined) => {
  const [userBalance, setUserBalance] = useState(BigNumber.from(0));

  useEffect(() => {
    if (!ourTestToken || !account || !utils.isAddress(account)) {
      setUserBalance(BigNumber.from(0));
      return;
    }

    ourTestToken.balanceOf(account)
      .then(setUserBalance)
      .catch(console.error);

    const increaseBalance = (_: string, __: string, amount: any) => setUserBalance(balance => balance.add(amount));
    const decreaseBalance = (_: string, __: string, amount: any) => setUserBalance(balance => balance.sub(amount));

    const transferToFilter = ourTestToken.filters.Transfer(null, account, null);
    ourTestToken.on(transferToFilter, increaseBalance);

    const transferFromFilter = ourTestToken.filters.Transfer(account, null, null);
    ourTestToken.on(transferFromFilter, decreaseBalance);

    return () => {
      ourTestToken.removeListener(transferToFilter, increaseBalance);
      ourTestToken.removeListener(transferFromFilter, decreaseBalance);
    }
  }, [account, ourTestToken]);

  return userBalance;
}

export {
  useUserBalance,
};
