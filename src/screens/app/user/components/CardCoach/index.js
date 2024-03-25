import { Card, Button, Typography, Row, Col} from 'antd'
import { PhoneFilled, ClockCircleOutlined, EnvironmentFilled } from '@ant-design/icons'
import { BluePoint, IconCar, IconTP, RedPoint, MiniBlue, MiniRed } from '../../../../../assets/svgs/index'
import convert from '../../../../../utils/convert'
import { regexNumber } from '../../../../../utils/regex'
const { Title } = Typography
import dayjs from 'dayjs'
import './style.css'

const CardCoach = (props) => {
    const { coach, setModalShow, setCurrentCoach } = props    
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
                    <a className='text-green'>Thông tin</a>
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
                    <div className='space-x-2 flex flex-row items-center truncate'>
                        <IconTP />
                        <p className='font-extrabold'>Lộ trình:</p>
                        <p>{coach.travelPath.detail}</p>
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
            <div className='flex flex-row h-20'>
                <img src={coach.coachCompany.logo} className='w-12 h-12 rounded-full m-3 mt-6'/>
                <div className='flex flex-col h-12 mt-5'>
                    <h1 className='font-bold'>{coach.coachCompany.name}</h1>
                    <p><PhoneFilled /> Hotline: {coach.coachCompany.hotline}</p>
                </div>
            </div>
        </div>}
        extra={<a className='text-background mr-4'>Thông tin</a>}
        >
            <div className='flex flex-col'>
                <div className="border border-dashed border-green w-full mt-1" />
                    <div className='flex flex-row items-center h-12'>
                        <Title className='w-1/3 mt-3' style={{color: '#006D38'}}>{dayjs(coach.departureTime).format("HH:mm")}</Title>
                        <div className='w-2/3 flex flex-col'>
                            <div className='space-x-2 flex flex-row items-center'><IconCar /><p className="text-xs font-bold">{coach.coachTypeName}</p></div>
                            <div className='space-x-2 flex flex-row items-center'><ClockCircleOutlined /><p className="text-xs font-bold"> Xuất bến: {coach.startPoint.location.district} - {coach.endPoint.location.district}</p></div>
                        </div>             
                        
                    </div>
                    <div className='space-x-2 font-bold flex flex-row items-center truncate'>
                        <IconTP />
                        <p>Lộ trình: {coach.travelPath.detail}</p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniBlue />
                        <p className='truncate font-bold'>{coach.startPoint.location.district} = Trung chuyển đón </p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <MiniRed />
                        <p className='truncate font-bold'>{coach.endPoint.location.district} = Trung chuyển trả</p>
                    </div>

                <div className=''>
                    <div className='flex flex-row h-8'>
                    <Title className='w-3/4' level={3}>{regexNumber(coach.price)}đ</Title>
                    <Button
                    className='w-1/4 flex justify-end' 
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