import { Card } from 'antd'
import news from '../../../../../assets/news.png'

const NewsCard = ({news}) => {
    return (
        <div className='mobile:w-3/4 desktop:w-full'>
            <div className='flex flex-col'>
                <img className='object-cover w-full h-40 rounded-md' src={news.imageUrl}/>
                <h1 className='font-bold truncate mobile:text-lg desktop:text-md mx-1'>{news.title}</h1>
                <p className="line-clamp-4 mobile:hidden desktop:flex mx-1">{news.content}</p>

                {/* <p className='mt-3'>Th5, 12/10/2023</p> */}
            </div>
        </div>
    )
}

export default NewsCard