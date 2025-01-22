import React from "react";

function Container(props: any) {
  const { type = "light", size = "m", ...rest } = props;
  return (
    <div className={`bg-${type} lib-grid py-8`}>
      <div className={`lib-grid-${size}`} {...rest} />
    </div>
  );
}

export { Container };
