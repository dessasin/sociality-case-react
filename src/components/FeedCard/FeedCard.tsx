import './FeedCard.scss'
import dateConverter from '../../utils/dateConverter'

import del from '../../assets/icons/delete.png'
import options from '../../assets/icons/options.png'
import likes from '../../assets/icons/likes.png'
import shares from '../../assets/icons/shares.png'
import views from '../../assets/icons/views.png'
import comments from '../../assets/icons/comments.png'
import approve from '../../assets/icons/approve.png'
import cancel from '../../assets/icons/cancel.png'
import noImage from '../../assets/no-post-image.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'



interface feedCardProps{
    image:string,
    message:string,
    createDate:string,
    publishDate:string,
    updateDate:string,
    isPublished:boolean,
    status:number,
    platform:string,
    link:string,
}

export default function FeedCard(props:feedCardProps) {
    const statusMap:{ [key: number]: string; }  = {
        0: 'color-schduled',
        1: 'color-need-approval',
        2: 'color-note',
        3: 'color-published',
        4: 'color-error',
    }
    const platformMap:{ [key: string]: any; }  = {
        'instagrambusiness': instagram,
        'twitter': twitter,
        'facebook': facebook,
    }

    /**
     * schecule : 0
     * need approval:1
     * notes: 2
     * published: 3
     * error: 4
     */

    function getFeedPost(link:string) {
        window.open(link, '_blank');
    }

    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        event.currentTarget.src = noImage;
        event.currentTarget.className = "error";
      };

    return (
        <div className='feed_card' onClick={()=>{getFeedPost(props.link)}}>
            <span className={`feed_card_badge ${statusMap[props.status]} `  }  >
                <img src={platformMap[props.platform]} alt='platform logo'/>
            </span>
            <div className="feed_card_content">
                <div className="feed_card_content_header">
                    <h5 className='feed_card_date'>{dateConverter(props.updateDate,true)}</h5>
                    <div className='feed_card_actions'>
                        <img src={props.isPublished ? approve : cancel} alt="s" />
                        <img src={del} alt="" />
                        <img src={options} alt="" />
                    </div>
                </div>
                <div className="feed_card_content_main">
                    <p className='feed_content'>{props.message}</p>
                    <img loading='lazy' src={props.image} onError={(e)=>{imageOnErrorHandler(e)}} alt="" className='feed_img' />
                </div>
                <div className="feed_card_content_footer">
                    <div className="feed_card_reaction">
                        <img src={likes} alt="" />
                        <span>0</span>
                    </div>
                    <div className="feed_card_reaction">
                        <img src={shares} alt="" />
                        <span>0</span>
                    </div>
                    <div className="feed_card_reaction">
                        <img src={comments} alt="" />
                        <span>0</span>
                    </div>
                    <div className="feed_card_reaction">
                        <img src={views} alt="" />
                        <span>0</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
