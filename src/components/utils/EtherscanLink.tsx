import { useWeb3 } from '../../web3';

function EtherscanLink({ children, address }: {
  children: React.ReactNode,
  address: string
}) {
  const classes = "break-all font-mono";

  let { networkName } = useWeb3();
  if (networkName === "localhost") {
    return (
      <div className={classes}>{children}</div>
    )
  } else if (networkName === "homestead") {
    networkName = "";
  } else {
    networkName += ".";
  }

  return (
    <a className={classes} href={`https://${networkName}etherscan.io/address/${address}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default EtherscanLink;
