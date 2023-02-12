import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import RecoverPassword from "../Components/Login/RecoverPassword";
import Registration from "../Components/Registration/Registration";
import Users from "../Components/Users/Users";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login' , element: <Login></Login> },
            { path: '/registration' , element: <Registration></Registration> },
            { path: '/recoverPassword' , element: <RecoverPassword></RecoverPassword> },
            { path: '/users' , element: <Users></Users> }
        ]
    }
])