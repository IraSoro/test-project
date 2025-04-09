import React from "react";

interface ButtonProps {
  id: number;
  onClick: (id: number) => void;
  disabled: boolean;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onClick(props.id);
  };

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
