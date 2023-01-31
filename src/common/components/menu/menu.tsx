import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMoneyBill, faUser} from "@fortawesome/free-solid-svg-icons";
import {MenuItem} from "@/src/common/components/menu/menu_item";



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
    {
        icon: faMoneyBill,
        key: 3,
        label: "Assets",
        link: "/asset"
    }
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