import MoviesAdmin from "../pages/admin/movies";
import MainAdminPage from "../pages/admin/userlist";
import UserDetails from "../pages/components/UserDetails";
import Booking from "../pages/main/booking";
import Detail from "../pages/main/detail";
import Home from "../pages/main/home";
import Login from "../pages/main/login";
import Register from "../pages/main/register";

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
    },
    {
        path: "/components/UserDetails/:tk",
        exact: true,
        Component: UserDetails,
    }
]

export const adminRouter = [
    {
        path:"/admin/movies",
        exact: true,
        Component: MoviesAdmin,
    },
    {
        path:"/admin/userlist",
        exact: true,
        Component: MainAdminPage,
    }
]

export const userRouter = [
    {
        path: "/login",
        exact: true,
        Component: Login,
    },
    {
        path: "/register",
        exact: true,
        Component: Register,
    }
    
]