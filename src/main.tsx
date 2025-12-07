import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react"
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Field from "./Main/Field.tsx";
import {store} from "./Main/store/store.ts";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const router = createBrowserRouter([
    {
        path: "/",
        element: <Field/>,
        errorElement: "ERROR",
        children: [

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