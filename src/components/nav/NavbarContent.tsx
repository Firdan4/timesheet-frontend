import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarContentProps {
  label: string;
  active: boolean;
  href: string;
}

const NavbarContent: FC<NavbarContentProps> = ({ active, label, href }) => {
  return (
    <Link to={href} className="relative flex flex-col gap-2 w-fit h-full">
      <p className={`text-xs ${active && "text-new-blue"}`}>{label}</p>
      <span
        className={`flex h-[2px] rounded-e-full rounded-s-full bottom-0 duration-300 ${
          active ? "bg-new-blue w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default NavbarContent;
