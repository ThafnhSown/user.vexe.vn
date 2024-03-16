import { Card } from 'antd'
import news from '../../../../../assets/news.png'

const NewsCard = ({news}) => {
    return (
        <div className='mobile:w-full desktop:w-1/4'>
            <div className='flex flex-col "w-40 h-60 overflow-hidden"'>
                <img className='object-cover w-full h-40' src={news.imageUrl}/>
                <h1 className='font-bold truncate mobile:text-lg desktop:text-md'>{news.title}</h1>
                <p className="line-clamp-4">{news.content}</p>

                {/* <p className='mt-3'>Th5, 12/10/2023</p> */}
            </div>
        </div>
    )
}

export default NewsCard