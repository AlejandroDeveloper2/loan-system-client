import { BrowserRouter } from "react-router-dom";

import MainRoutes from "@routes/MainRoutes";

import "react-toastify/dist/ReactToastify.css";
import "@styles/GlobalStyles.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
