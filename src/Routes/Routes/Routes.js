import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Homepage from "../../Pages/Homepage/Homepage"
import Contact from "../../Pages/Contact/Contact"
import Clientpage from "../../Pages/Clientpage/Clientpage"
import About from "../../Pages/About/About"
import Ourworks from "../../Pages/Ourworks/Ourworks"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Homepage></Homepage>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/clientpage',
                element:<Clientpage></Clientpage>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path:'/ourworks',
                element:<Ourworks></Ourworks>
            }
        ]
    }
])