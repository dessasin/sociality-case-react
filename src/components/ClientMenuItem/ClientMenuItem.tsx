import './ClientMenuItem.scss'

export interface clientItemProps {
    id: string,
    label: string,
    select: boolean,
    icon:string,
    notifications:number,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function ClientMenuItem(props:clientItemProps) {
    return (

        <>
        <span  className={`client_item ${props.select ? 'client_item-active' :  ''}`} onClick={props.onClick} >
            <span className='client_item-badge'>{props.notifications}</span>
            <img src={props.icon} alt={props.label}/>
        </span>
        </>
    )
}