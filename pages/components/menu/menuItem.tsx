import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface MenuItem {
    icon: IconProp
    key: number
    label: string
    link: string
}

interface MenuItemProps {
    item: MenuItem
}

export function MenuItem(props: MenuItemProps) {
    const item = props.item

    return <Link href={item.link}> <FontAwesomeIcon icon={item.icon}/> {item.label} </Link>
}