import { useLocation } from "react-router-dom";

interface Route {
  label: string;
  active: boolean;
  href: string;
}

const useRoutes = (): Route[] => {
  const { pathname } = useLocation();

  const routes: Route[] = [
    {
      label: "Daftar Kegiatan",
      active: pathname === "/daftarkegiatan",
      href: "/daftarkegiatan",
    },
    {
      label: "Pengaturan",
      active: pathname === "/pengaturan",
      href: "/pengaturan",
    },
  ];

  return routes;
};

export { useRoutes };
