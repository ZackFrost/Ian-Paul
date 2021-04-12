import React from "react";

const CustomCardWidget = ({
  customHeight,
  customWidth,
  color,
  borderRadius,
  border,
  widget,
}) => {
  return (
    <div
      className=" card shadow-lg p-3 mb-5 bg-white"
      style={{
        color: color,
        borderRadius: borderRadius,
        height: !customHeight ? 100 : customHeight,
        border: border,
        zIndex: 2,
        position: "relative",
      }}
    >
      <div className="card-body ">{widget}</div>
    </div>
  );
};

export default CustomCardWidget;
