import React from "react";

// Define the type for any props the header might take (optional)
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header >
      <h1>{title}</h1>
    </header>
  );
};

// Add some inline styles (optional)
// const headerStyle: React.CSSProperties = {
// // background: 'linear-gradient(90deg, rgba(22,14,153,1) 0%, rgba(87,142,201,1) 35%, rgba(0,212,255,1) 100%)',
//   padding: '20px',
//   color:'white',
//   textAlign: 'center',
// borderRadius: '5px',
// };

export default Header;
