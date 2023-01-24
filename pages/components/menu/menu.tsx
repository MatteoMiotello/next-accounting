import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {MenuItem} from "@/pages/components/menu/menuItem";



const menuItems: MenuItem[] = [
    {
        icon: faHome,
        key: 1,
        label: "Home",
        link: "/"
    },
    {
        icon: faUser,
        key: 2,
        label: "Users",
        link: "/home"
    },
]

export default function MainMenu() {
    return <div className="w-full">
        <ul className="flex p-5">
            {
                menuItems.map( ( item ) => {
                    return <li key={item.key} className="mx-2 text-lg"> <MenuItem item={item}/> </li>
                } )
            }
        </ul>
    </div>
}