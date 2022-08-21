import NavSubItem, { navSubItemProps } from '../NavSubItem/NavSubItem'
import './NavItem.scss'
import seeMore from '../../assets/icons/SeeMore.png'
import seeLess from '../../assets/icons/SeeLess.png'

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
            <span className='nav_item_label' ><img src={props.icon} alt='navbar item icon' /> {props.label}</span>
            <div  className={`nav_item_collapse ${props.select ? 'nav_collapse-active' :  ''}`}>
                {
                    //TODO: burada child yoksa bir sey gormemeliyiz
                props.childs.map
                    ((child, index) => {
                       return <NavSubItem key={index} {...child} />
                    })
                }
            </div>
            <img className='nav_item-action_img' src={props.select ? seeLess : seeMore} alt="" />
        </div>
    )
}
