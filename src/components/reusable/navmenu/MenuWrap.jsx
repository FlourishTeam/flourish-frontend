import React, { useState } from 'react';

const MenuWrap = ({ children, side }) => {
  const [hidden, setHidden] = useState(false);

  const show = () => {
    setHidden(true);
  };

  let style;
  if (hidden) {
    style = { display: 'none' };
  }
  return (
    <div style={style} className={side}>
      {children}
    </div>
  );
};

export default MenuWrap;
