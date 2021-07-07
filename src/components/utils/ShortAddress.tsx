import EtherscanLink from './EtherscanLink';

function ShortAddress({ address, length = 13, separator = "…" }: {
  address: string,
  length?: number,
  separator?: string
}) {
  let short = address;

  if (address.length > length) {
    const sepLen = separator.length;
    const charsToShow = length - sepLen;
    const frontChars = Math.ceil(charsToShow / 2 + 1); // accounts for the "0x"
    const backChars = Math.floor(charsToShow / 2 - 1); // accounts for the "0x"
    short = address.substr(0, frontChars) + separator + address.substr(address.length - backChars)  
  }

  return (
    <EtherscanLink address={address}>
      {short}
    </EtherscanLink>
  );
}

export default ShortAddress;
