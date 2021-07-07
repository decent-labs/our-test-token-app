import { MouseEventHandler, ReactNode } from 'react';

function Button({ onClick, disabled, children }: {
  onClick: MouseEventHandler,
  disabled?: boolean,
  children: ReactNode,
}) {
  return (
    <button className={`px-4 py-1 bg-gray-200 rounded font-medium text-sm ${disabled ? "opacity-50 cursor-default" : ""}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
