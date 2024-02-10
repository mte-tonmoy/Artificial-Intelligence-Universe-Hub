import React from "react";

const Button = ({children}) => {
  return (
    <div className="text-center">
      <button className="btn btn-success">{children}</button>
    </div>
  );
};

export default Button;
