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
import { requestLoadMainBanner, requestLoadSubBanner } from '../../../../redux/slices/newsSlice'
import InfiniteScroll from 'react-infinite-scroll-component';

const { Title } = Typography

const Home = () => {
    const dispatch = useAppDispatch()
    const listNews = useAppSelector(state => state.userState.newsFeed)
    const listSubBanner = useAppSelector(state => state.newsState.subBanner)

    useEffect(() => {
        dispatch(requestLoadNewsFeed())
        dispatch(requestLoadSubBanner(1))
    }, [])

    return (
        <div className='flex flex-col'>
            {
                console.log(listSubBanner)
            }
                <div className='flex mobile:hidden desktop:flex space-x-4'>
                {
                    listSubBanner.map(banner => <div className='w-1/3'>
                        <img className='rounded-lg' src={banner.imageUrl}/>
                    </div>)
                }
                </div>
                <div className='mobile:flex mobile:flex-col justify-center desktop:hidden'>
                    <Carousel autoplay className=''>
                        {
                            listSubBanner.map(banner => <div>
                                <img className='rounded-lg' src={banner.imageUrl}/>
                            </div>)
                        }
                    </Carousel>
                </div>
               
            <div className='mt-8 mb-8'>
                <Title level={3} style={{color:"#006D38"}} className='mobile:hidden desktop:flex'>ĐIỂM ĐẾN PHỔ BIẾN</Title>
                <div className='flex mobile:hidden desktop:flex flex-row space-x-8 items-center'>
                    {
                        listNews.map((news, index) => index < 4 ? <NewsCard news={news}/> : null)
                    }
                </div>
                <Title level={4} style={{color:"#006D38"}} className='mobile:flex desktop:hidden ml-8'>ĐIỂM ĐẾN PHỔ BIẾN</Title>
                <div className='grid grid-cols-12 flex-row desktop:hidden'>
                    <div className='col-span-1'></div>
                    <div className='col-span-10 flex flex-col justify-center'>
                        <Carousel autoplay>
                            {
                                listNews.map((news, index) => index < 4 ? <NewsCard news={news}/> : null)
                            }
                        </Carousel>
                    </div>
                    <div className='col-span-1'></div>
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