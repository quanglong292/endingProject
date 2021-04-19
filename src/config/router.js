import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import Booking from "../pages/main/booking";
import Detail from "../pages/main/detail";
import Home from "../pages/main/home";
import Login from "../pages/main/login";

export const mainRouter = [
    {
        path: "/",
        exact: true,
        Component: Home,
    },
    {
        path: "/detail/:maPhim",
        exact: false,
        Component: Detail,
    }, 
    {
        path: "/booking/:maLichChieu",
        exact: false,
        Component: Booking,
    }
]

export const userRouter = [
    {
        path: "/login",
        exact: true,
        Component: Login,
    }
]