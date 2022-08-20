import { ReactElement } from 'react'
import NavSubItem, { navSubItemProps } from '../NavSubItem/NavSubItem'
import './NavItem.scss'

interface navItemProps {
    id: string,
    label: string,
    select: boolean,
    childs: navSubItemProps[],
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NavItem(props: navItemProps) {
    return (
        <div className='nav_item' onClick={props.onClick}>
            <input type="radio" name="navItem" id={props.id} />
            <label htmlFor={props.id}>{props.label}</label>
            <div>
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
