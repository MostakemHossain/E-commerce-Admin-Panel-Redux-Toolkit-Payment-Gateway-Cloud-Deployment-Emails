import { createBrowserRouter } from "react-router-dom";
import Cart from "../../features/cart/Cart";
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
    },
    {
        path: '/cart',
        element: <Cart></Cart>
    }
])
