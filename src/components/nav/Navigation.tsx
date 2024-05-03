import React from "react";
import NavbarContent from "./NavbarContent";
import { useRoutes } from "@/routes/routes";

const Navigation = () => {
  const route = useRoutes();

  return (
    <div className="shadow w-full px-2 sm:px-9 flex flex-col items-stretch justify-between h-16 sm:h-20">
      <h1 className="text-lg font-semibold text-gray-600">HH Timesheet</h1>
      <nav className="relative px-4 font-bold flex gap-3">
        {route?.map((prev) => (
          <NavbarContent
            key={prev.label}
            href={prev.href}
            label={prev.label}
            active={prev.active}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
