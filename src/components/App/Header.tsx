import { Link } from 'react-router-dom';
import { useWeb3 } from '../../web3';
import { connect } from '../../web3/providers';
import { useData } from "../../data";
import Button from '../ui/Button';
import ActiveLink from '../routing/ActiveLink';
import ShortAddress from '../utils/ShortAddress';

function Header() {
  const { account } = useWeb3();
  const { token: { name, symbol }, user: { isTokenHolder } } = useData();

  return (
    <div className="flex justify-between items-baseline -mx-1">
      <div className="flex items-baseline">
        {name && <Link to="/" className="mx-1">
          <div className="text-2xl">{name} <span className="text-base">({symbol})</span></div>
        </Link>}
        {(isTokenHolder) && <div className="mx-1"><ActiveLink to="/token-holders-only">token holders only</ActiveLink></div>}
      </div>
      <div className="mx-1">
        {!account && <Button onClick={connect}>connect</Button>}
        {account && <ShortAddress address={account} />}
      </div>
    </div>
  );
}

export default Header;
