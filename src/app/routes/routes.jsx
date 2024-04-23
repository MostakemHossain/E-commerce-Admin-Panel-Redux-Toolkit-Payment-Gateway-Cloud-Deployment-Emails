import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from "../../pages/CheckoutPage";
import Home from "../../pages/Home";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import CartPage from "../../pages/cartPage";
import ProductDetailPage from "../../pages/productDetailPage";

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
        element: <CartPage></CartPage>
    },
    {
        path: '/checkout',
        element: <CheckoutPage></CheckoutPage>
    },
    {
        path: 'product-detail',
        element: <ProductDetailPage />
    }
])
