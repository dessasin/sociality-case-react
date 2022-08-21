import React, { useState, useLayoutEffect } from 'react'
import { getAllFeeds } from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { setFeeds } from '../../stores/feeds';
import './Feeds.scss'

import DescriptionBanner from '../../components/DescriptionBanner/DescriptionBanner';
import FeedWrapper from '../../components/FeedWrapper/FeedWrapper';
import Loader from '../../components/Loader/Loader';

export default function Feeds() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const feeds = useSelector((state: any) => state.feeds)
    useLayoutEffect(() => {
        (
            async function () {
                const response: any = await getAllFeeds();
                dispatch(setFeeds(response.data.record.posts_by_date))
                setLoading(false)
            }
        )()
    }, [])
    console.log(feeds);
    return (
        <div className='feeds_page'>
            <DescriptionBanner />

            {
                loading ?
                    <Loader/>
                    :
                    (
                        <div className="feeds_content">
                            <>
                                {
                                    Object.entries(Object.keys(feeds.feeds)).map(([key, val]) => {
                                        return <FeedWrapper key={key} title={val} children={feeds.feeds[val]} />
                                    })
                                }
                            </>
                        </div>
                    )

            }

        </div>
    )
}
