import { Modal, Form, Typography, Input, Col, Row, DatePicker, Button } from "antd"
import { EnvironmentFilled, ClockCircleOutlined, PhoneFilled, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react"
import { IconCar, IconTP, BluePoint, RedPoint, MiniBlue, MiniRed } from '../../../../../assets/svgs/index'
import dayjs from 'dayjs'
import { regexNumber } from "../../../../../utils/regex"
import convert from "../../../../../utils/convert"
const { Title } = Typography
import './style.css'
import { apiOrderCoach } from "../../../../../api/services"
import { current } from "@reduxjs/toolkit"

const ModalOrder = (props) => {
    const [numberTicket, setNumberTicket] = useState(1)
    const [date, setDate] = useState()
    const { currentCoach, setCurrentCoach, modalShow, setModalShow } = props
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldValue("quantity", 1)
    }, [])

    const orderCoach = async () => {
        const data = form.getFieldsValue()
        const sss = {...data, quantity:numberTicket ,timeslotId: currentCoach.timeslotId, pickUpPointId: currentCoach.startPoint.location.id, dropOffPointId: currentCoach.endPoint.location.id, departureDate: date, returnDate: 22222, userId: 20}
        // console.log(sss)
        const res = await apiOrderCoach(sss)
        if(res.data.error == 0) {
            setModalShow(false)
        }
    }

    return (
        <div>
        <Form form={form}>
        <Modal 
            open={modalShow}
            okText="Xác nhận"
             footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-end space-x-2">
                    <div>
                        <p>{`Giá vé: ${regexNumber(currentCoach.price)}đ`}</p>
                        <label>Tổng cộng: <a>{regexNumber(currentCoach.price * numberTicket)}đ</a></label>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => orderCoach()} className="h-12 text-lg">Xác nhận</Button>
                    </Form.Item>
                    
                </div>
              )}
            onCancel={() => setModalShow(false)}
            width={800}
        >
             <div className='flex flex-row h-20'>
                <img src={currentCoach.coachCompany.logo} className='w-20 h-20 rounded-full'/>
                <div className='flex flex-col h-12 mt-5 ml-4'>
                    <h1 className='font-bold text-lg'>{currentCoach.coachCompany.name}</h1>
                    <p><PhoneFilled />Hotline: {currentCoach.coachCompany.hotline}</p>
                </div>
            </div>
            <div className="border border-dashed border-green my-3 w-full" />
            <div className='flex flex-row items-center h-12 space-x-2'>
                        <Title className="mt-4" style={{color: '#006D38'}}>{dayjs(currentCoach.departureTime).format("HH:mm")}</Title>
                        <div className='flex flex-col'>
                            <div className='space-x-2 flex flex-row items-center'><IconCar /><p className="text-xs font-bold">{currentCoach.coachTypeName}</p></div>
                            <div className='space-x-2 flex flex-row items-center'><ClockCircleOutlined /><p className="text-xs font-bold"> Xuất bến: {currentCoach.startPoint.location.district} - {currentCoach.endPoint.location.district}</p></div>
                        </div>             
                        
                    </div>
            <div className='space-x-2 flex flex-row items-center truncate'>
                        <IconTP />
                        <p className='font-extrabold'>Lộ trình:</p>
                        <p>{currentCoach.travelPath.detail}</p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniBlue/> 
                        <p className='font-extrabold'>{currentCoach.startPoint.location.district}</p>
                        <p>= Trung chuyển đón {convert(currentCoach.startPoint)} </p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniRed />
                        <p className='font-extrabold'>{currentCoach.endPoint.location.district}</p>
                        <p>= Trung chuyển trả {convert(currentCoach.endPoint)}</p>
                    </div>
            <Title level={4}>Thông tin</Title>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <label>Ngày đi</label>
                    <Form.Item name="departureDate" className="flex flex-col" rules={[{ required: true, message: 'Nhập ngày xuất phát' }]}>
                        <DatePicker className="w-full" onChange={(date) => setDate(date.valueOf())}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <label>Số lượng vé</label>
                    <Form.Item name="quantity" rules={[{ required: true, message: 'Nhập số lượng vé!' }]}>
                        <div className="flex flex-row">
                            <Input className="ticket justify-center items-center space-x-2" prefix={<MinusCircleOutlined onClick={() => numberTicket > 1 ? setNumberTicket(numberTicket-1) : setNumberTicket(1)}/>} suffix={<PlusCircleOutlined onClick={() => numberTicket < 10 ? setNumberTicket(numberTicket+1): setNumberTicket(numberTicket)} />} min={1} value={numberTicket} onChange={(e) => setNumberTicket(e.target.value)}/>
                        </div>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <label>Họ và tên</label>
                    <Form.Item name="passengerName" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input placeholder="Nhập họ tên"/>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <label>Số điện thoại</label>
                    <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input placeholder="Nhập số điện thoại"/>
                    </Form.Item>
                </Col>
            </Row>
            <label>Ghi chú</label>
            <Form.Item name="note">
                <Input placeholder="Nhập ghi chú"/>
            </Form.Item>
        </Modal>
       
        </Form>
        </div>
      
    ) 
}

export default ModalOrder