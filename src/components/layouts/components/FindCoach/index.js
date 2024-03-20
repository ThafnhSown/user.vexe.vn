import { Button, Row, Card, DatePicker, Switch, Col, Cascader } from 'antd'
import { BluePoint, RedPoint, Swap, Calendar } from '../../../../assets/svgs'
import { SmallDashOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { requestFindCoach, requestLoadOption, requestLoadCompany } from '../../../../redux/slices/userSlice'
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import moment from 'moment'
import './style.css'


const FindCoach = () => {
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
            departureTime: startTime,
            endPointId: dropPoint,
            returnTime: endTime,
            startPointId: pickPoint,
        }
        const res = await dispatch(requestFindCoach(data))
        const tmp = unwrapResult(res)
        if(tmp.error == 0) {
            navigate("/tim-kiem")
        }
    }

    const disabledDate = current => {
        const fifteenDaysFromNow = moment().add(15, 'days');
        return current && current <= moment().startOf('day') || current > fifteenDaysFromNow.endOf('day');;
      };
      

    return (
        <div className='space-y-2 mobile:w-11/12 desktop:w-3/4 absolute mobile:-bottom-40 desktop:-bottom-8 desktop:h-20 rounded-full z-10'>
                <div className='flex flex-row w-full bg-white rounded-md p-1 items-center justify-center space-x-1 mobile:hidden desktop:flex'>
                    <div className='point-input w-1/5 flex flex-row items-center border border-black'>
                        <BluePoint />
                        <Cascader showSearch={true} expandIcon={<div />} size='large' options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' onChange={(value) => value ? setPickPoint(value[1]) : null}/>
                    </div>
                    <div onClick={() => {
                        // let tmp = dropPoint
                        // setDropPoint(pickPoint)
                        // setPickPoint(tmp)
                        // console.log("after", pickPoint, dropPoint)
                    }}>
                    <Swap />
                    </div>
                    <div className='point-input w-1/5 flex flex-row items-center border border-black'>
                        <RedPoint />
                        <Cascader showSearch={true} size='large' options={options} placeholder="Nhập điểm trả" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => value ? setDropPoint(value[1]) : null}/>
                    </div>
                    <div className='point-input w-1/5 flex flex-row items-center border border-black'>
                        <Calendar />
                        <DatePicker suffixIcon={<div />} disabledDate={disabledDate} size='large' onChange={value => setStartTime(dayjs(value).startOf('day').valueOf())} placeholder='Chọn ngày đi'/>
                    </div>
                    <Button onClick={() => handleFindCoach()} className='text-xl font-extrabold mobile:hidden desktop:block rounded-none h-4/5 w-1/6'>Tìm xe</Button>
                    {/* <DatePicker onChange={value => setEndTime(new Date(value).valueOf())} placeholder='Chọn ngày về'/> */}
                    {/* <Col>
                        <p>Khứ hồi</p>
                        <Switch defaultChecked/>
                    </Col> */}
                </div>
                <div className='flex flex-col justify-center items-center bg-white rounded-md desktop:hidden mobile-fc'>
                    <div className='flex flex-row w-3/4 mt-2'>
                        <BluePoint />
                        <Cascader suffixIcon={<div />} options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setPickPoint(value[1])}/>
                    </div>
                    <div className='flex flex-row items-center h-6 w-3/4 ml-4'>
                        <SmallDashOutlined rotate={90}/>
                        <div class="w-3/4 mt-2 h-1 border-t border-green opacity-20"></div>
                        <Swap />
                    </div>
                    
                    <div className='flex flex-row w-3/4'>
                        <RedPoint />
                        <Cascader suffixIcon={<div />} options={options} placeholder="Nhập điểm trả" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setDropPoint(value[1])}/>
                    </div>
                    <div class="w-3/4 mt-2 h-1 border-t border-green opacity-20"></div>
                    <div className='flex flex-row w-3/4 mt-2'>
                        <Calendar />
                        <DatePicker suffixIcon={<div />} disabledDate={disabledDate} onChange={value => setStartTime(new Date(value).valueOf())} placeholder='Chọn ngày đi'/>
                    </div>
                </div>
 
            <div  className='mobile:h-12 desktop:hidden flex items-center justify-center'>
                <Button onClick={() => handleFindCoach()} className='text-xl font-extrabold h-12 w-full'>Tìm xe</Button>
            </div>
        </div>

       
            

    )
}

export default FindCoach