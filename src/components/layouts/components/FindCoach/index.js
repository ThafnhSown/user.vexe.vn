import { Button, Row, Card, DatePicker, Switch, Col, Cascader } from 'antd'
import { BluePoint, RedPoint, Swap, Calendar } from '../../../../assets/svgs'
import { SmallDashOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { requestFindCoach, requestLoadOption, requestLoadCompany, setCurrentSearch } from '../../../../redux/slices/userSlice'
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import dayjs from 'dayjs'
import moment from 'moment'
import {locale} from '../../../../utils/regex'
import './style.css'

const FindCoach = () => {
    const location = useLocation()
    const pathName = location.pathname
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const options = useAppSelector((state) => state.userState.options)
    const [pickPoint, setPickPoint] = useState(0)
    const [dropPoint, setDropPoint] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)
    const displayRender = (labels) => labels[labels.length - 1];
    useEffect(() => {
        dispatch(requestLoadCompany())
        dispatch(requestLoadOption())
    }, [])
  
    const handleFindCoach = async () => {
        const data = {
            departureTime: startTime == 0 ? dayjs().valueOf() : startTime,
            endPointId: dropPoint,
            returnTime: endTime,
            startPointId: pickPoint,
        }
        const res = await dispatch(requestFindCoach(data))
        const tmp = unwrapResult(res)
        let searchInfo = {
            startPoint: tmp.data[0]?.startPoint.location.district,
            endPoint: tmp.data[0]?.endPoint.location.district,
            time: startTime == 0 ? dayjs().valueOf() : startTime
        }
        dispatch(setCurrentSearch(searchInfo))
        if(tmp.error == 0) {
            navigate("/tim-kiem")
        }
    }
    const disabledDate = current => {
        const fifteenDaysFromNow = moment().add(15, 'days');
        return current && current <= moment().startOf('day') || current > fifteenDaysFromNow.endOf('day');;
      };  

    return (
        <div className={`space-y-2 mobile:w-11/12 desktop:w-2/3 absolute mobile:-bottom-48 desktop:h-20 rounded-full z-10 ${pathName == '/tim-kiem' ? 'mobile:hidden desktop:block desktop:top-8' : 'desktop:bottom-4'}`}>
                <div className='flex flex-row w-full bg-white rounded-md p-1 items-center justify-center space-x-1 mobile:hidden desktop:flex'>
                    <div className='point-input w-1/4 flex flex-row items-center border border-black rounded-md px-1'>
                        <BluePoint />
                        <Cascader showSearch={true} expandIcon={<div />} size='large' options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' onChange={(value) => value ? setPickPoint(value[1]) : null}/>
                    </div>
                    <div onClick={() => {
                    }}>
                    <ArrowRightOutlined />
                    </div>
                    <div className='point-input w-1/4 flex flex-row items-center border border-black rounded-md px-1'>
                        <RedPoint />
                        <Cascader showSearch={true} size='large' options={options} placeholder="Nhập điểm trả" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => value ? setDropPoint(value[1]) : null}/>
                    </div>
                    <div className='point-input w-1/4 flex flex-row items-center border border-black rounded-md px-1'>
                        <Calendar />
                        <DatePicker inputReadOnly={true} mode='date' locale={locale} suffixIcon={<div />} disabledDate={disabledDate} size='large' onChange={value => setStartTime(dayjs(value).startOf('day').valueOf())} placeholder='Chọn ngày đi'/>
                    </div>
                    <Button onClick={() => handleFindCoach()} className='text-xl font-extrabold mobile:hidden desktop:block rounded-md h-4/5 w-1/5'>Tìm xe</Button>
                    {/* <DatePicker onChange={value => setEndTime(new Date(value).valueOf())} placeholder='Chọn ngày về'/> */}
                    {/* <Col>
                        <p>Khứ hồi</p>
                        <Switch defaultChecked/>
                    </Col> */}
                </div>
                <div className='flex flex-col justify-center items-center bg-white rounded-md desktop:hidden mobile-fc border border-background'>
                    <div className='flex flex-row w-3/4 mt-2'>
                        <BluePoint />
                        <Cascader size='large' suffixIcon={<div />} options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} allowClear={false} onChange={(value) => setPickPoint(value[1])}/>
                    </div>
                    <div className='flex flex-row items-center h-6 w-3/4 ml-4'>
                        <SmallDashOutlined rotate={90}/>
                        <div class="w-3/4 mt-2 h-1 border-t border-green opacity-20"></div>
                        {/* <Swap /> */}
                    </div>
                    
                    <div className='flex flex-row w-3/4'>
                        <RedPoint />
                        <Cascader popupClassName="test" size='large' suffixIcon={<div />} options={options} placeholder="Nhập điểm trả" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} allowClear={false} onChange={(value) => setDropPoint(value[1])}/>
                    </div>
                    <div class="w-3/4 mt-2 h-1 border-t border-green opacity-20"></div>
                    <div className='flex flex-row w-3/4 my-2'>
                        <Calendar />
                        <DatePicker inputReadOnly={true} locale={locale} className='items-center justify-center w-full' suffixIcon={<div />} disabledDate={disabledDate} onChange={value => setStartTime(new Date(value).valueOf())} placeholder='Chọn ngày đi'/>
                    </div>
                </div>
 
            <div className='mobile:h-12 desktop:hidden flex items-center justify-center'>
                <Button onClick={() => handleFindCoach()} className='text-xl font-extrabold h-12 w-full mt-6'>Tìm xe</Button>
            </div>
        </div>
    )
}

export default FindCoach