import banner from '../../../../assets/banner.png'
import FindCoach from '../FindCoach'
import { useAppSelector, useAppDispatch } from '../../../../redux/hook'
import { Carousel } from 'antd'
import { useEffect } from 'react'
import { requestLoadMainBanner } from '../../../../redux/slices/newsSlice'
import { useLocation } from 'react-router-dom'

const Banner = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const pathName = location.pathname
    const listMainBanner = useAppSelector(state => state.newsState.mainBanner)

    useEffect(() => {
        dispatch(requestLoadMainBanner(0))
    }, [])

    return (
        <div className='flex items-center flex-row justify-center relative'>
            <div className={`${pathName=='/tim-kiem' ? 'hidden' : ''} flex items-center flex-col relative`} style={{backgroundColor:'#f3f3f3'}}>
                {
                    listMainBanner?.length ? <img src={listMainBanner[listMainBanner.length-1].imageUrl}/> : <img src={banner} className='max-w-full'/>
                }
            </div>
            <FindCoach />
        </div>
           
    ) 
}

export default Banner