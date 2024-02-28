import { Button, Row, Card, DatePicker, Switch, Col, Cascader } from 'antd'
import { RetweetOutlined, EnvironmentFilled } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { requestFindCoach, requestLoadOption, requestLoadCompany } from '../../../../redux/slices/userSlice'
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom'

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
        if(!options.length) {
            dispatch(requestLoadOption())
        }
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

    return (
        <div style={{backgroundColor: "#f3f3f3"}} className='space-y-2 absolute bottom-40'>
        <Card className='flex items-center justify-center'>
                <Row className='flex flex-row items-center space-x-1'>
                    <Cascader suffixIcon={<EnvironmentFilled style={{color: "blue"}}/>} options={options} placeholder="Nhập điểm đón" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setPickPoint(value[1])}/>
                    <RetweetOutlined />
                    <Cascader suffixIcon={<EnvironmentFilled style={{color: "red"}}/>} options={options} placeholder="Nhập điểm dừng" displayRender={displayRender} expandTrigger='hover' expandIcon={<div/>} onChange={(value) => setDropPoint(value[1])}/>
                    <DatePicker onChange={value => setStartTime(new Date(value).valueOf())}/>
                    <DatePicker onChange={value => setEndTime(new Date(value).valueOf())}/>
                    <Col>
                        <p>Khứ hồi</p>
                        <Switch defaultChecked/>
                    </Col>
                </Row> 
                
            </Card>
            <div  className='flex items-center justify-center'>
                <Button onClick={() => handleFindCoach()} className='w-80 h-16 text-xl font-extrabold'>Tìm kiếm</Button>
            </div>
        </div>
            

    )
}

export default FindCoach