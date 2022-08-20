import React, {useLayoutEffect} from 'react'
import { getAllFeeds } from '../../utils/api'
import { useDispatch,useSelector} from 'react-redux';
import { setFeeds } from '../../stores/feeds';

export default function Feeds() {
    const dispatch  =useDispatch()
    const feeds = useSelector((state:any)=>state.feeds)
    useLayoutEffect(()=>{
        (
            async function() {
                const response:any = await getAllFeeds();
                dispatch(setFeeds(response.data.record.posts_by_date))
            }
            )()
        },[])
return (
    <div>feeds</div>
)
}
