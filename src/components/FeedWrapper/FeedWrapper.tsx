import './FeedWrapper.scss'
import FeedCard from '../FeedCard/FeedCard'
import dateConverter from '../../utils/dateConverter'

interface feedWrapperProps{
    title:string,
    children:[]
}

export default function FeedWrapper(props:feedWrapperProps) {
    console.log(props.children);
  return (
    <div className='feed_wrapper'>
        <h2 className="feed_wrapper_title">{dateConverter(props.title)}</h2>
         <div className="feed_wrapper_content">
            <>
            {
                props.children.map((child:any,index:number)=>{
                    return <FeedCard
                    key={index}
                    image={child.entry.image[0]}
                    message={child.entry.message}
                    createDate={child.created_at}
                    publishDate={child.published_at}
                    updateDate={child.updated_at}
                    isPublished={child.is_published}
                    status={child.status}
                    link={child.link}
                    platform={child.account.channel}
                    />
                })
            }
            </>
         </div>

    </div>
  )
}
