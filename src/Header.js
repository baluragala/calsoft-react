import React from "react";

const getMainTitle = () => "estore";

const Header = ({ mainTitle, subTitle }) => {
  return (
    <header>
      {/**/}
      <h1>{mainTitle.toUpperCase()}</h1>
      <h3>{subTitle.toLowerCase()}</h3>
    </header>
  );
};

export default Header;
