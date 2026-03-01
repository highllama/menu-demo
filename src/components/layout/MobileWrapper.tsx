import React from 'react';
import './MobileWrapper.css';

interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-content">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;
