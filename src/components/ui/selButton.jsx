import React from 'react';
import './styles/selButton.css';

const SelButton = ({ children, active, className = '', ...rest }) => {
  return (
    <div
      {...rest}
      className={
        `selbutton ${active ? 'selbutton-active' : ''}` +
        (className ? ` ${className}` : '')
      }
    >
      {children}  
    </div>
  );
};

export default SelButton;
