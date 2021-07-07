import { useState, useEffect } from 'react';
import { utils, constants } from 'ethers';
import { Title, SubTitle } from '../ui/Titles';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useData } from '../../data';
import { useUserBalance } from '../../data/balances';
import { useTransaction } from '../../data/transactions';

function MyBalance() {
  const { user: { balance }, token: { decimals } } = useData();

  return (
    <Section>
      <SubTitle>my balance</SubTitle>
      <div>{utils.formatUnits(balance || 0, decimals)}</div>
    </Section>
  );
}

function BalanceCheck() {
  const { contracts: { ourTestToken }, token: { decimals } } = useData();
  const [givenAddress, setGivenAddress] = useState("");

  const balance = useUserBalance(ourTestToken, givenAddress);

  return (
    <Section>
      <SubTitle>arbitrary balance check</SubTitle>
      <div>address: <input className="w-96 px-2 border font-mono mb-4" placeholder={constants.AddressZero} value={givenAddress} onChange={e => setGivenAddress(e.target.value)} /></div>
      <div>balance: {utils.formatUnits(balance, decimals)}</div>
    </Section>
  );
}

function Transfer() {
  const {
    contracts: { ourTestToken },
    token: { decimals },
    user: { balance }
  } = useData();

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const { contractCall, pending } = useTransaction();

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(
      pending ||
      !to ||
      !amount ||
      !(parseFloat(amount) > 0) ||
      !utils.isAddress(to) ||
      utils.parseUnits(amount, decimals).gt(balance || 0)
    );
  }, [amount, balance, decimals, pending, to]);

  const transfer = () => {
    if (!ourTestToken) {
      return;
    }

    contractCall(
      () => ourTestToken.transfer(to, utils.parseUnits(amount, decimals)),
      "transfering", "transfer failed", "transfer succeeded",
      undefined, () => {
        setTo("");
        setAmount("");
      }
    );
  }

  return (
    <Section>
      <SubTitle>transfer</SubTitle>
      <div>to: <input className="w-96 px-2 border font-mono mb-4" placeholder={constants.AddressZero} value={to} onChange={e => setTo(e.target.value)} /></div>
      <div>amount: <input className="w-48 px-2 border font-mono mb-4" type="number" placeholder="0" value={amount} onChange={e => setAmount(e.target.value)} /></div>
      <Button onClick={() => transfer()} disabled={disabled}>transfer</Button>
    </Section>
  );
}

function Dashboard() {
  return (
    <div>
      <Title>wallet</Title>
      <MyBalance />
      <BalanceCheck />
      <Transfer />
    </div>
  )
}

export default Dashboard;
