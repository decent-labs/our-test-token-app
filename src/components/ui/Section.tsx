function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded p-4 mb-4 bg-gray-100">
      {children}
    </div>
  );
}

export default Section;
