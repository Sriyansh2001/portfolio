import React, { ButtonHTMLAttributes, FC } from 'react';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'animated';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const classes = `btn btn-${variant} ${className}`.trim();
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
