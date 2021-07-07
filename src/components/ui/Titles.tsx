function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl mb-8">{children}</h1>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl mb-4">{children}</h2>
  );
}

function SubSubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg mb-4">{children}</h3>
  );
}

export { Title, SubTitle, SubSubTitle };
