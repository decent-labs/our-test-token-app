import { Link, useRouteMatch } from 'react-router-dom';

function ActiveLink({ children, to, exact = false }: { 
  children: React.ReactNode,
  to: string,
  exact?: boolean
}) {
  const match = useRouteMatch({
    path: to,
    exact: exact
  });

  return (
    <Link to={to} className={`${match ? "italic" : ""}`}>{children}</Link>
  );
}

export default ActiveLink;
