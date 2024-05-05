import React, { FC } from "react";
import Navigation from "../nav/Navigation";
import HeaderItem from "./HeaderItem";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <div className="p-1 bg-new-background-page min-h-screen relative">
      <header className="flex flex-col items-center justify-between w-full gap-1">
        <HeaderItem />

        <Navigation />
      </header>

      <div className="flex flex-col gap-[2px] w-full p-3 sm:px-6 min-h-full relative over flow-scroll">
        {children}
      </div>
    </div>
  );
};

export default Header;
