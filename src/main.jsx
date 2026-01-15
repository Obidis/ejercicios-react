
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.jsx';
import ContadorClicks from './pages/ContadorClicks.jsx';
import CambiarColor from './pages/CambiarColor.jsx';
import ListaDinamica from './pages/ListaDinamica.jsx';
import FiltradoDinamico from './pages/FiltradoDinamico.jsx';
import CalculadoraSencilla from './pages/CalculadoraSencilla.jsx';
import Temporizadores from './pages/Temporizadores.jsx';
import GeneradorContraseñas from './pages/GeneradorContraseñas.jsx';
import ContadorPalabras from './pages/ContadorPalabras.jsx';
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ContadorClicks",
    element: <ContadorClicks />,
  },
  {
    path: "/CambiarColor",
    element: <CambiarColor />,
  },
  {
    path: "/ListaDinamica",
    element: <ListaDinamica />,
  },
  {
    path: "/FiltradoDinamico",
    element: <FiltradoDinamico />,
  },
  {
    path: "/CalculadoraSencilla",
    element: <CalculadoraSencilla />,
  },
  {
    path: "/Temporizadores",
    element: <Temporizadores />,
  },
  {
    path: "/GeneradorContraseñas",
    element: <GeneradorContraseñas />,
  },
  {
    path: "/ContadorPalabras",
    element: <ContadorPalabras />,
  },
]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
