import React, { FC } from "react";
import HeaderContent from "./HeaderContent";
import Navigation from "./nav/Navigation";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <header className="flex flex-col items-center justify-between w-full gap-1">
        <HeaderContent />

        <Navigation />
      </header>

      <div className="pl-3 sm:pl-10 bg-new-background-page w-full">
        {children}
      </div>
    </>
  );
};

export default Header;
