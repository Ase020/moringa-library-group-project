import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout } from "./components";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
         ],
      },
   ]);
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
