import '../NavItem/NavItem.scss'
import bell from '../../assets/icons/bell.svg'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


export default function NavbarNotifications() {
    const clients = useSelector((state:any)=>state.clients)
    const [activeClient,setActiveClient]=useState({notifications:0})
    useEffect(()=>{
        let active = clients.clients.find((x:any)=> x.select == true)
        setActiveClient(active)
    },[clients])

    return (
        <div className='nav_item'>
            <span className='nav_item_label' ><img src={bell} /> Notifications</span>
            <span className='nav_item_notification-badge'> {activeClient.notifications}</span>
        </div>
    )
}
