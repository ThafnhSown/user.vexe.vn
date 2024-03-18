import { Button, Row, Card, DatePicker, Switch, Col, Cascader } from 'antd'
import { RetweetOutlined, EnvironmentFilled } from '@ant-design/icons'
import { BluePoint, RedPoint, Swap } from '../../../../assets/svgs'
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
        <div className='space-y-2 w-3/4 absolute mobile:-bottom-36 desktop:-bottom-10 desktop:h-20 rounded-full z-10'>
        <Card className='flex items-center justify-center mobile:w-80 desktop:w-full'>
                <Row className='flex flex-row w-full items-center space-x-1 mobile:hidden desktop:flex'>
                    <Cascader showSearch={true} size='large' suffixIcon={<BluePoint />} options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => value ? setPickPoint(value[1]) : null}/>
                    <div onClick={() => {
                        console.log("first", pickPoint, dropPoint)
                        let tmp = dropPoint
                        setDropPoint(pickPoint)
                        setPickPoint(tmp)
                        console.log("after", pickPoint, dropPoint)
                    }}>
                    <Swap />
                    </div>
                    
                    <Cascader showSearch={true} size='large' suffixIcon={<RedPoint />} options={options} placeholder="Nhập điểm dừng" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => value ? setDropPoint(value[1]) : null}/>
                    <DatePicker disabledDate={disabledDate} size='large' onChange={value => setStartTime(dayjs(value).startOf('day').valueOf())} placeholder='Chọn ngày đi'/>
                    {/* <DatePicker onChange={value => setEndTime(new Date(value).valueOf())} placeholder='Chọn ngày về'/> */}
                    {/* <Col>
                        <p>Khứ hồi</p>
                        <Switch defaultChecked/>
                    </Col> */}
                </Row>
                <Col className='desktop:hidden'>
                    <Cascader className='w-full border-none' suffixIcon={<BluePoint />} options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setPickPoint(value[1])}/>
                    {/* <RetweetOutlined /> */}
                    <Cascader className='w-full border-none' suffixIcon={<RedPoint />} options={options} placeholder="Nhập điểm dừng" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setDropPoint(value[1])}/>
                    <DatePicker disabledDate={disabledDate} className='w-full border-none' onChange={value => setStartTime(new Date(value).valueOf())} placeholder='Chọn ngày đi'/>
                </Col>
        </Card>
            <div  className='flex items-center justify-center'>
                <Button onClick={() => handleFindCoach()} className='desktop:w-72 desktop:h-12 text-xl font-extrabold mobile:w-60 mobile:h-12'>Tìm kiếm</Button>
            </div>
        </div>

       
            

    )
}

export default FindCoach