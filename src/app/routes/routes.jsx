import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/sign-up',
        element: <SignUpPage></SignUpPage>
    }
])
