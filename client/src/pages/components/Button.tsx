import React, { memo, useCallback } from "react";

interface ButtonProps {
  id: number;
  onClick: (id: number) => void;
  disabled: boolean;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      props.onClick(props.id);
    },
    [props.id, props.onClick],
  );

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default memo(Button);
