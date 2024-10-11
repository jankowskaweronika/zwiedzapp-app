'use client';

import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
}

export default Button;