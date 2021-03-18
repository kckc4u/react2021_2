import React from "react";

import "./custom-button.style.scss";

export const CustomButton = ({
  children,
  inverted,
  isGoogleBtn,
  ...otherprops
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
        ${isGoogleBtn ? "google-btn" : ""}
        custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
