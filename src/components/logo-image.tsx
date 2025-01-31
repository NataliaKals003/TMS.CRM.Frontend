// LogoImage.tsx
import React from 'react';
import Image from 'next/image';
import logo from '../../public/Logo.jpg';

const LogoImage: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src={logo}
        alt="Logo"
        width={46}
        height={46}
        style={{
          marginRight: 21,
        }}
      />
      <div
        style={{
          borderRight: '1px solid #EAEEF4',
          height: '12vh',
          position: 'static',
        }}
      ></div>
    </div>
  );
};

export default LogoImage;
