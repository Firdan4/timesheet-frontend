import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const history = useNavigate();

  useEffect(() => {
    history("/daftarkegiatan");
  }, [history]);

  return null; // Atau ganti dengan return komponen yang sesuai
};

export default App;
