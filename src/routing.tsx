import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/header/Header";
import { Activities } from "./page/Activities";

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
        {/* <Activities /> */}
        <div>Pengaturan</div>
      </Header>
    ),
  },
  {
    path: "/testing",
    element: <div>TEsting</div>,
  },
]);

export { router };
