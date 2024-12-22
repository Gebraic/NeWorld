import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CountryDetail from "./pages/CountryDetail";
import CountryList from "./pages/CountryList";
import Error from "./pages/Error";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path : "/",
        element : <Home />,
        errorElement : <Error />,
      },
      {
        path : "aboutpage",
        element : <AboutPage />,
      },
      {
        path : "country",
        element : <CountryList />,
      },
      {
        path : "/country/:countryName",
        element : <CountryDetail />,
      }
    ]
  },
])

export default function App(){
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}