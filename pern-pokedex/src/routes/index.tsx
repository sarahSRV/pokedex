import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Pokedex from "../features/cuadricula/components/Pokedex";
import equipo from "../features/equipo/components/equipo";
import { EjemploUseReducer } from "../features/ejemplosHooks/EjemploUseReducer";
import Errors from "../errors/Error";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        errorElement: <Errors />,
        children:[
            {
                path: '/',
            Component:Pokedex
            },
            {
                path:'/prueba',
            Component: equipo,
            },
            {
                path:'/batalla',
                Component: EjemploUseReducer
            }
        ]
    }
])