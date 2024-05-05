import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/header/Header";
import { Activities } from "./page/Activities";
import Settings from "./page/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <App />
      </Header>
    ),
  },
  {
    path: "/daftarkegiatan",
    element: (
      <Header>
        <Activities />
      </Header>
    ),
  },
  {
    path: "/pengaturan",
    element: (
      <Header>
        <Settings />
      </Header>
    ),
  },
  {
    path: "/testing",
    element: <div>TEsting</div>,
  },
]);

export { router };
