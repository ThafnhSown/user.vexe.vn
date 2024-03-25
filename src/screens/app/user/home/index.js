import { Carousel, Typography } from 'antd'
import datve from '../../../../assets/dat-ve.png'
import dichvu from '../../../../assets/dich-vu.png'
import phucvu from '../../../../assets/phuc-vu.png'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { useEffect, useState } from 'react'
import { requestLoadNewsFeed } from '../../../../redux/slices/userSlice'
import NewsCard from '../components/NewsCard'
import { requestLoadSubBanner } from '../../../../redux/slices/newsSlice'
import ReactCardSlider from "react-card-slider-component";
import './style.css'

const { Title } = Typography

const Home = () => {
    const dispatch = useAppDispatch()
    const listNews = useAppSelector(state => state.userState.newsFeed)
    const listSubBanner = useAppSelector(state => state.newsState.subBanner)
    const [ss, setSs] = useState([]) 
    useEffect(() => {
        dispatch(requestLoadNewsFeed())
        dispatch(requestLoadSubBanner(1))
        let tmp = listNews.map(news => ({
            title: news.title,
            image: news.imageUrl,
            description: news.content
        }))
        setSs(tmp)
    }, [])

    return (
        <div className='flex flex-col'>
                <div className='flex mobile:hidden desktop:flex space-x-6'>
                {
                    listSubBanner.map(banner => <div className='w-1/3 overflow-hidden h-36'>
                        <img className='rounded-lg object-cover h-full w-full' src={banner.imageUrl}/>
                    </div>)
                }
                </div>
                <div className='mobile:flex mobile:flex-col justify-center desktop:hidden bg-white'>
                    <Carousel className='space-x-1 rounded-md'>
                        {
                            listSubBanner.map(banner => <div className='overflow-hidden h-36 bg-neutral'>
                                <img className='rounded-md object-cover h-full w-full' src={banner.imageUrl}/>
                            </div>)
                        }
                    </Carousel>
                </div>
               
            <div className='mt-4 mb-4'>                
            <Title level={3} style={{color:"#006D38"}} className='mobile:hidden desktop:flex'>ĐIỂM ĐẾN PHỔ BIẾN</Title>
                <div className='mobile:hidden desktop:grid flex-row items-center grid grid-cols-4 gap-8'>
                    {
                        listNews.map((news, index) => index < 4 ? <div className='bg-white w-full rounded-xs pb-3'>
                            <NewsCard news={news}/>
                            </div>
                             : null)
                    }
                </div>
                <Title level={4} style={{color:"#006D38"}} className='mobile:flex desktop:hidden'>ĐIỂM ĐẾN PHỔ BIẾN</Title>
                <div className='flex-row desktop:hidden'>
                    <div className='flex flex-col justify-center'>
                        <ReactCardSlider slides={ss} onClick={(e) => e.preventDefault()}/>
                    </div>
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