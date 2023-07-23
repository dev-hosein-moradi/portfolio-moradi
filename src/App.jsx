import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomeWrapper from "./pages/home-page/HomeWrapper";
import { Suspense } from "react";
import PreLoader from "./pages/pre-laoder/PreLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeWrapper />,
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
    {
      path: "/*",
      element: <NotFound />,
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
  ]);
  return (
    <Suspense fallback={<PreLoader />}>
      <Toaster />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
