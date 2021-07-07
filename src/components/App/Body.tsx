import { Switch, Route } from 'react-router-dom';
import { useWeb3 } from '../../web3';
import { useData } from '../../data';
import TokenHoldersOnly from '../TokenHoldersOnly';
import Dashboard from '../Dashboard';
import AuthorizedRoute from '../routing/AuthorizedRoute';

function Body() {
  const { networkName } = useWeb3();
  const {
    contracts: { ourTestToken },
    user: { isTokenHolder },
  } = useData();

  if (!ourTestToken) {
    return (
      <div>our test token address on {networkName} is not configured</div>
    )
  }

  return (
    <Switch>
      <AuthorizedRoute path="/token-holders-only" authorization={isTokenHolder || false}>
        <TokenHoldersOnly />
      </AuthorizedRoute>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default Body;
