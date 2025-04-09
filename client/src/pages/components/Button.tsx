import React, { memo, useCallback } from "react";

const Button: React.FC<any> = ({ onClick, id, disabled, children }) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, []);

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
