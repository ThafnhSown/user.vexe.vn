import banner from '../../../../../public/banner.png'
import FindCoach from '../FindCoach'
import { useAppSelector } from '../../../../redux/hook'
import { Carousel } from 'antd'

const Banner = () => {
    const listMainBanner = useAppSelector(state => state.newsState.mainBanner)

    return (
        <div className='flex items-center flex-row justify-center relative'>
            <div className='flex items-center flex-col relative' style={{backgroundColor:'#f3f3f3'}}>
                {
                    listMainBanner.length ? <Carousel autoplay>
                        {
                            listMainBanner.map(banner => <div>
                                <img src={banner.imageUrl}/>
                                </div>)
                        }
                    </Carousel> : <img src={banner} className='max-w-full'/>
                }
            </div>
            <FindCoach />
        </div>
           
    ) 
}

export default Banner