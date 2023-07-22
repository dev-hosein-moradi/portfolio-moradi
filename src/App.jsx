import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomeWrapper from "./pages/home-page/HomeWrapper";
import { Suspense } from "react";
import PreLoader from "./pages/pre-laoder/PreLoader";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Toaster />
        <HomeWrapper />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
