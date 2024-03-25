const NewsCard = ({news}) => {
    return (
        <div className='mobile:w-3/4 desktop:w-full'>
            <div className='flex flex-col space-y-1'>
                <img className='object-cover w-full h-40 rounded-md' src={news.imageUrl}/>
                <h1 className='font-bold truncate mobile:text-lg desktop:text-md mx-1'>{news.title}</h1>
                <p className="line-clamp-3 h-16 mobile:hidden desktop:flex mx-1">{news.content}</p>
            </div>
        </div>
    )
}

export default NewsCard