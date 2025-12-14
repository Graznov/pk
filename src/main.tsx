import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react"
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Field from "./Main/Field.tsx";
import {store} from "./Main/store/store.ts";
import Aboutme from "./Main/Components/Aboutme/Aboutme.tsx";
import Produce from "./Main/Components/Produce/Produce.tsx";
import Service from "./Main/Components/Service/Service.tsx";
import Fabrication from "./Main/Components/Fabrication/Fabrication.tsx";
import Recommendation from "./Main/Components/Recommendation/Recommendation.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Field/>,
        errorElement: "ERROR",
        children: [
            {
                path: "/aboutme",
                element: <Aboutme/>
            },
            {
                path: "/produce",
                element: <Produce/>
            },
            {
                path: "/service",
                element: <Service/>
            },
            {
                path: "/fabrication",
                element: <Fabrication/>
            },
            {
                path: "/recommendation",
                element: <Recommendation/>
            }
        ]
    },
])


    createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    </React.StrictMode>,
)