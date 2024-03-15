import { Carousel, Typography } from 'antd'
import datve from '../../../../assets/dat-ve.png'
import dichvu from '../../../../assets/dich-vu.png'
import phucvu from '../../../../assets/phuc-vu.png'
import banner from '../../../../assets/banner.png'
import news from '../../../../assets/news.png'
import whiteLogo from '../../../../assets/white-logo.png'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { useEffect } from 'react'
import { requestLoadNewsFeed } from '../../../../redux/slices/userSlice'
import NewsCard from '../components/NewsCard'

const { Title } = Typography

const Home = () => {
    const dispatch = useAppDispatch()
    const listNews = useAppSelector(state => state.userState.newsFeed)
    const items = [{
        id:1, url: news
    },
    {
        id:2, url: banner
    }

    ]
    useEffect(() => {
        dispatch(requestLoadNewsFeed())
    }, [])

    return (
        <div className='flex flex-col'>
                <div className='flex mobile:hidden desktop:flex space-x-4'>
                    <img className='w-1/3 rounded-lg' src={banner}/>
                    <img className='w-1/3 rounded-lg' src={banner}/>
                    <img className='w-1/3 rounded-lg' src={banner}/>
                </div>
                <div className='mobile:flex mobile:flex-col justify-center desktop:hidden'>
                    <Carousel autoplay className=''>
                        <div>
                            <img className='w-3/4 rounded-lg' src={banner}/>
                        </div>
                        <div className=''>
                            <img className='w-3/4 rounded-lg' src={banner}/>
                        </div>
                        <div className=''>
                            <img className='w-3/4 rounded-lg' src={banner}/>
                        </div>
                    </Carousel>
                </div>
               
            <div className='mt-8 mb-8'>
                <Title level={3} style={{color:"#006D38"}}>ĐIỂM ĐẾN PHỔ BIẾN</Title>
                <div className='flex mobile:flex-col desktop:flex-row space-x-8 items-center'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center'>
            <Title level={2} style={{color:"#006D38"}}><p className='mobile:text-base desktop:text-3xl'>TẠI SAO NÊN CHỌN VEXE.VN</p></Title>
            <div className='flex mobile:flex-col desktop:flex-row justify-center space-x-6'>
                <div className='flex flex-col items-center w-80 space-y-3 mobile:ml-4'>
                    <img src={datve}/>
                    <Title level={4}>Đặt vé dễ dàng</Title>
                    <p>Đặt vé trực tiếp với các hãng xe không qua trung gian. Thao tác đơn giản, thông tin điểm đón và điểm trả rõ ràng.</p>
                </div>
                <div className='flex flex-col items-center w-80 space-y-3'>
                    <img src={dichvu}/>
                    <Title level={4}>Dịch vụ đa dạng</Title>
                    <p>Nhiều hãng xe, nhiều loại xe và nhiều giờ xuất bến giúp bạn thoải mái lựa chọn chuyến đi phù hợp.</p>
                </div>
                <div className='flex flex-col items-center w-80 space-y-3'>
                    <img src={phucvu}/>
                    <Title level={4}>Phục vụ chu đáo</Title>
                    <p>Các đối tác hãng xe được Vexe.vn lựa chọn và theo dõi quy trình phục vụ hành khách xuyên suốt quá trình hoạt động. Đem đến cho quý khách một hành trình trọn vẹn.</p>
                </div>

            </div>
           
            </div>
        </div>
    ) 
}

export default Home