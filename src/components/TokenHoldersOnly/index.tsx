import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { Title } from '../ui/Titles';
import ActiveLink from '../routing/ActiveLink';
import RugTheNonbelievers from './RugTheNonbelievers';
import BurnThemAll from './BurnThemAll';

function AdminNavItem({ children, to }: { children: React.ReactNode, to: string }) {
  const routeMatch = useRouteMatch();
  const match = useRouteMatch({
    path: routeMatch.url + to,
    exact: false
  });

  return (
    <div className="mx-1">
      <ActiveLink to={routeMatch.url + to}>
        <div className={`bg-gray-100 p-2 rounded border ${match ? "border-black" : ""}`}>
          {children}
        </div>
      </ActiveLink>
    </div>
  );
}

function AdminNavBar() {
  return (
    <div className="flex -mx-1 mb-8">
      <AdminNavItem to="/rug-the-nonbelievers">rug the nonbelievers</AdminNavItem>
      <AdminNavItem to="/burn-them-all">burn them all</AdminNavItem>
    </div>
  );
}

function Admin() {
  const routeMatch = useRouteMatch();

  return (
    <div>
      <Title>token holders!</Title>
      <AdminNavBar />
      <Switch>
        <Route path={routeMatch.url + "/rug-the-nonbelievers"}>
          <RugTheNonbelievers />
        </Route>
        <Route path={routeMatch.url + "/burn-them-all"}>
          <BurnThemAll />
        </Route>
        <Route path={routeMatch.url + "/"}>
          <Redirect to={routeMatch.url + "/rug-the-nonbelievers"} />
        </Route>
      </Switch>
    </div>
  );
}

export default Admin;
