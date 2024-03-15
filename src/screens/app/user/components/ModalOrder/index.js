import { Modal, Form, Typography, Input, Col, Row, DatePicker, Button } from "antd"
import { EnvironmentFilled, ClockCircleFilled, PhoneFilled } from '@ant-design/icons'
import { useEffect, useState } from "react"
import { IconCar, IconTP } from '../../../../../assets/svgs/index'
import dayjs from 'dayjs'
const { Title } = Typography
import './style.css'
import { apiOrderCoach } from "../../../../../api/services"

const ModalOrder = (props) => {
    const [numberTicket, setNumberTicket] = useState(1)
    const [date, setDate] = useState()
    const { currentCoach, setCurrentCoach, modalShow, setModalShow } = props
    const [form] = Form.useForm()

    const orderCoach = async () => {
        const data = form.getFieldsValue()
        const sss = {...data, timeslotId: currentCoach.timeslotId, pickUpPointId: currentCoach.startPoint.id, dropOffPointId: currentCoach.endPoint.id, departureDate: date, returnDate: 22222, userId: 20}
        console.log(sss)
        const res = await apiOrderCoach(sss)
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
                        <p>{`Giá vé: ${currentCoach.price}đ`}</p>
                        <label>Tổng cộng: <a>{currentCoach.price * numberTicket}đ</a></label>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => orderCoach()} className="h-12 text-lg">Xác nhận</Button>
                    </Form.Item>
                    
                </div>
              )}
            onCancel={() => setModalShow(false)}
            width={800}
        >
            <div>
                <Row>
                    <Col>
                        <img src={currentCoach.coachCompany.logo} className='w-20 h-20' />
                    </Col>
                    <Col className='flex flex-col justify-normal items-center'>
                        <Title className='mt-2' level={4}>{currentCoach.coachCompany.name}</Title>
                        <p><PhoneFilled /> Hotline: {currentCoach.coachCompany.hotline}</p>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Title style={{color: '#006D38'}}>{dayjs(currentCoach.departureTime).format("HH:mm")}</Title>              
                </Col>
                <Col>
                    <Row className='mx-2 space-x-2 flex flex-row items-center'><IconCar /><p className="text-base font-bold">{currentCoach.coachTypeName}</p></Row>
                    <Row className='mx-2 space-x-2 flex flex-row items-center'><ClockCircleFilled /><p className="text-base font-bold"> Xuất bến: {currentCoach.startPoint.location.district} - {currentCoach.endPoint.location.district}</p></Row>
                </Col>
            </Row>
            <Row>
                <Row className='mx-2 space-x-2 flex flex-row items-center'><IconTP /> <p>Lộ trình: {currentCoach.travelPath.detail}</p></Row>
            </Row>
            <Row className='mx-2 space-x-2 flex flex-row items-center'>
                <p><EnvironmentFilled style={{color: "blue"}}/> {currentCoach.startPoint.location.district} = Trung chuyển đón</p>
            </Row>
            <Row className='mx-2 space-x-2 flex flex-row items-center'>
                <p><EnvironmentFilled style={{color: "red"}}/> {currentCoach.endPoint.location.district} = Trung chuyển trả</p>
            </Row>
            <Title level={4}>Thông tin</Title>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <label>Ngày đi</label>
                    <Form.Item name="departureDate" className="flex flex-col" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <DatePicker className="w-full" onChange={(date) => setDate(date.valueOf())}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <label>Số lượng vé</label>
                    <Form.Item name="quantity" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input type='number' defaultValue={1} onChange={(e) => setNumberTicket(e.target.value)}/>
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