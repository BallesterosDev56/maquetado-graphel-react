import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages: 
import { Index } from './pages/index/Index.jsx'
import { Nosotros } from './pages/nosotros/Nosotros'
import { Servicios } from './pages/servicios/Servicios.jsx'
import { Contacto } from './pages/contacto/Contacto.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <Index/>,
    },
    {
        path: '/nosotros',
        element: <Nosotros/>
    },
    {
        path: '/servicios',
        element: <Servicios/>
    },
    {
        path: '/contacto',
        element: <Contacto/>
    },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}></RouterProvider>

)
