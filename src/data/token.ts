import { useState, useEffect } from 'react';
import { OurTestToken } from '../assets/typechain';

const useTokenName = (ourTestTokenContract: OurTestToken | undefined) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (!ourTestTokenContract) {
      setName("");
      return;
    }

    ourTestTokenContract.name()
      .then(setName)
      .catch(console.error)
    
  }, [ourTestTokenContract]);

  return name;
}

const useTokenSymbol = (ourTestTokenContract: OurTestToken | undefined) => {
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    if (!ourTestTokenContract) {
      setSymbol("");
      return;
    }

    ourTestTokenContract.symbol()
      .then(setSymbol)
      .catch(console.error)
    
  }, [ourTestTokenContract]);

  return symbol;
}

const useTokenDecimals = (ourTestTokenContract: OurTestToken | undefined) => {
  const [decimals, setDecimals] = useState(0);

  useEffect(() => {
    if (!ourTestTokenContract) {
      setDecimals(0);
      return;
    }

    ourTestTokenContract.decimals()
      .then(setDecimals)
      .catch(console.error)
    
  }, [ourTestTokenContract]);

  return decimals;
}

export { 
  useTokenName,
  useTokenSymbol,
  useTokenDecimals,
};
