import { ReactElement } from 'react'
import NavSubItem, { navSubItemProps } from '../NavSubItem/NavSubItem'
import './NavItem.scss'

interface navItemProps {
    id: string,
    label: string,
    select: boolean,
    icon:string,
    childs: navSubItemProps[],
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NavItem(props: navItemProps) {
    return (
        <div className={`nav_item ${props.select ? 'nav_item-active' :  ''}`} onClick={props.onClick}>
            <span className='nav_item_label' ><img src={props.icon} /> {props.label}</span>
            <div  className={`nav_item_collapse ${props.select ? 'nav_collapse-active' :  ''}`}>
                {
                props.childs.map
                    ((child, index) => {
                       return <NavSubItem key={index} {...child} />
                    })
                }
            </div>
        </div>
    )
}
