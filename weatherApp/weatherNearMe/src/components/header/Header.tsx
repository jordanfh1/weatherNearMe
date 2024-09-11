import React from "react";

// Define the type for any props the header might take (optional)
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

// Add some inline styles (optional)
const headerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

export default Header;
