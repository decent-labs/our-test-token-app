import { useWeb3 } from '../../web3'
import packageJson from '../../../package.json'

function Footer() {
  const web3 = useWeb3();

  return (
    <div className="flex justify-between items-center -mx-1">
      <div className="font-mono mx-1">v{packageJson.version}{process.env.REACT_APP_GIT_HASH && `+${process.env.REACT_APP_GIT_HASH}`}</div>
      <div className="mx-1">{web3.networkName && `${web3.networkName} via `}{web3.providerName}</div>
    </div>
  );
}

export default Footer;
