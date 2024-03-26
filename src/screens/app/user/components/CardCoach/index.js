import { Card, Button, Typography, Row, Col} from 'antd'
import { PhoneFilled, ClockCircleOutlined, EnvironmentFilled } from '@ant-design/icons'
import { BluePoint, IconCar, IconTP, RedPoint, MiniBlue, MiniRed } from '../../../../../assets/svgs/index'
import convert from '../../../../../utils/convert'
import { regexNumber } from '../../../../../utils/regex'
import { useState } from 'react'
const { Title } = Typography
import dayjs from 'dayjs'
import { apiListOfficeByUser } from '../../../../../api/services'
import './style.css'

const CardCoach = (props) => {
    const { coach, setModalShow, setCurrentCoach } = props    
    const [detail, setDetail] = useState(false)

    const handleLoadListOffice = async (id) => {
        const res = await apiListOfficeByUser(id)
        console.log(res)
    }

    return (
        <div className='mobile:w-full'>
        <Card 
        title={<div>
            <div className='space-x-3 grid grid-cols-12 mt-4'>
                <img src={coach.coachCompany.logo} className='w-16 h-16 rounded-full col-span-1' />
                <div className='flex flex-col col-span-8'>
                    <Title level={4}>{coach.coachCompany.name}</Title>
                        <p><PhoneFilled /> Hotline: {coach.coachCompany.hotline}</p>
                </div>
                <div className='justify-end col-span-3 mt-4'>
                    <a className='text-green' onClick={() => handleLoadListOffice(coach.coachCompany.id)}>Thông tin</a>
                </div>
               
            </div>
            <div className="border border-dashed border-green mt-3 w-11/12 ju" />
        </div>}
        
        className='mobile:hidden desktop:block p-3'
        >
            <div className='flex flex-row mt-6'>
                <div className='w-3/4'>
                    <Row>
                        <Col>
                            <Title style={{color: '#006D38'}}>{dayjs(coach.departureTime).format("HH:mm")}</Title>              
                        </Col>
                        <Col>
                            <Row className='mx-2 space-x-2 flex flex-row items-center'><IconCar /><p className="text-base font-bold">{coach.coachTypeName}</p></Row>
                            <Row className='mx-2 space-x-2 flex flex-row items-center'><ClockCircleOutlined /><p className="text-base font-bold"> Xuất bến: {coach.startPoint.location.district} - {coach.endPoint.location.district}</p></Row>
                        </Col>
                    </Row>
                    <div className='space-x-2 flex flex-row items-center'>
                        <IconTP />
                        <p className='font-extrabold'>Lộ trình:</p>
                        {
                            detail ? <p>{coach.travelPath.detail}</p> : <p>{coach.travelPath.name}</p>
                        }
                        <p className='text-green' onClick={() => setDetail(!detail)}>{`${!detail ?  'Chi tiết' : 'Ẩn'}`}</p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniBlue/> 
                        <p className='font-extrabold'>{coach.startPoint.location.district}</p>
                        <p>= Trung chuyển đón {convert(coach.startPoint)} </p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniRed />
                        <p className='font-extrabold'>{coach.endPoint.location.district}</p>
                        <p>= Trung chuyển trả {convert(coach.endPoint)}</p>
                    </div>
                </div>

                <div className='w-1/4'>
                    <div className='flex flex-col justify-end'>
                    <Title level={3} >{regexNumber(coach.price)}đ</Title>
                    <Button
                    className='w-3/4' 
                    onClick={() => {
                        setModalShow(true)
                        setCurrentCoach(coach)
                        }}>
                        Đặt vé
                    </Button>
                    </div>
                </div>
            </div>

        </Card>

        <Card
        className='mobile:block mobile:w-full desktop:hidden mobile'
        title={<div>
            <div className='flex flex-row h-24'>
                <img src={coach.coachCompany.logo} className='w-16 h-16 rounded-full m-2 mt-7'/>
                <div className='flex flex-col h-12 mt-7'>
                    <h1 className='font-bold'>{coach.coachCompany.name}</h1>
                    <p><PhoneFilled /> Hotline: {coach.coachCompany.hotline}</p>
                </div>
            </div>
        </div>}
        extra={<a className='text-background mr-4' onClick={() => handleLoadListOffice(coach.coachCompany.id)}>Thông tin</a>}
        >
            <div className='flex flex-col'>
                <div className="border border-dashed border-green w-full mt-4" />
                    <div className='flex flex-row items-center h-12'>
                        <Title className='w-1/3 mt-3' style={{color: '#006D38'}}>{dayjs(coach.departureTime).format("HH:mm")}</Title>
                        <div className='w-2/3 flex flex-col'>
                            <div className='space-x-2 flex flex-row items-center'><IconCar /><p className="text-xs font-bold">{coach.coachTypeName}</p></div>
                            <div className='space-x-2 flex flex-row items-center'><ClockCircleOutlined /><p className="text-xs font-bold"> Xuất bến: {coach.startPoint.location.district}</p></div>
                        </div>             
                        
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <IconTP />
                        <p className='font-bold'>Lộ trình: </p>
                        {
                            detail ? <div className='overflow-scroll w-48'>
                                    <p className=''>{coach.travelPath.detail}</p>
                                </div> : <p className='truncate'>{coach.travelPath.name}</p>
                        }
                        <p className='text-green' onClick={() => setDetail(!detail)}>{`${!detail ?  'Chi tiết' : 'Ẩn'}`}</p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniBlue/> 
                        <p className='font-extrabold'>{coach.startPoint.location.district}</p>
                        <p>= Trung chuyển đón {convert(coach.startPoint)} </p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniRed />
                        <p className='font-extrabold'>{coach.endPoint.location.district}</p>
                        <p>= Trung chuyển trả {convert(coach.endPoint)}</p>
                    </div>

                <div className=''>
                    <div className='flex flex-row h-8'>
                    <Title className='w-3/4' level={3}>{regexNumber(coach.price)}đ</Title>
                    <Button
                    className='w-1/4 flex justify-center' 
                    onClick={() => {
                        setModalShow(true)
                        setCurrentCoach(coach)
                        }}>
                        Đặt vé
                    </Button>
                    </div>
                    
                </div>
            </div>

        </Card>
        </div>
     
    )
}

export default CardCoach