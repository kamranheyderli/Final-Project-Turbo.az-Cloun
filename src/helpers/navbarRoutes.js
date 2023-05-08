
// icon navbar
import { AiFillHeart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";



export const navbarRoutes = [
    {
        id: "1",
        name: "Tap.az",
        url: "https://tap.az"
    },
    {
        id: "2",
        name: "Bina.az",
        url: "https://bina.az"
    },
    {
        id: "3",
        name: "Boss.az",
        url: "https://boss.az"
    },

];

export const navbarLogin = [
    {
        id: "1",
        name: "app_help",
        url: "/helperpage"
    },
    {
        id: "2",
        name: "app_chosen",
        url: "/",
        icon: <AiFillHeart />,
    },
    {
        id: "3",
        name: "app_login",
        url: "/",
        icon: <BsPersonCircle />,
    },
]