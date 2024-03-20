import { Card, Button, Typography, Row, Col} from 'antd'
import { PhoneFilled, ClockCircleOutlined, EnvironmentFilled } from '@ant-design/icons'
import { BluePoint, IconCar, IconTP, RedPoint } from '../../../../../assets/svgs/index'
import convert from '../../../../../utils/convert'
import { regexNumber } from '../../../../../utils/regex'
const { Title } = Typography
import dayjs from 'dayjs'

const CardCoach = (props) => {
    const { coach, setModalShow, setCurrentCoach } = props    
    return (
        <div className='mobile:w-full'>
        <Card 
        title={<div>
            <div className='flex flex-row space-x-3'>
            <Col>
            <img src={coach.coachCompany.logo} className='w-20 h-20' />
            </Col>
            <div className='flex flex-col justify-normal'>
            <Title className='mt-2' level={4}>{coach.coachCompany.name}</Title>
            <p><PhoneFilled /> Hotline: {coach.coachCompany.hotline}</p>
            </div>
            </div>
        </div>}
        extra={<a className='text-background'>Thông tin</a>}
        className='mobile:hidden desktop:block p-3'
        >
            <div className='flex flex-row'>
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
                    <div className='mx-4 space-x-2 flex flex-row items-center truncate'>
                        <IconTP />
                        <p className='font-extrabold'>Lộ trình:</p>
                        <p>{coach.travelPath.detail}</p>
                    </div>
                    <div className='mx-2 space-x-2 flex flex-row items-center'>
                        <BluePoint/> 
                        <p className='font-extrabold'>{coach.startPoint.location.district}</p>
                        <p>= Trung chuyển đón {convert(coach.startPoint)} </p>
                    </div>
                    <div className='mx-2 space-x-2 flex flex-row items-center'>
                        <RedPoint />
                        <p className='font-extrabold'>{coach.endPoint.location.district}</p>
                        <p>= Trung chuyển trả {convert(coach.endPoint)}</p>
                    </div>
                </div>

                <div className='w-1/4'>
                    <div className='flex flex-col justify-end'>
                    <Title level={3}>{regexNumber(coach.price)}đ</Title>
                    <Button 
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
        className='mobile:block mobile:w-full desktop:hidden'
        title={<div>
            <Row>
            <Col>
            <img src={coach.coachCompany.logo} className='w-20 h-20' />
            </Col>
            <Col className='flex flex-col justify-normal'>
            <Title className='mt-2' level={4}>{coach.coachCompany.name}</Title>
            <p><PhoneFilled /> Hotline: {coach.coachCompany.hotline}</p>
            </Col>
            </Row>
        </div>}
        extra={<a className='text-background'>Thông tin</a>}
        >
            <div className='flex flex-col'>
                <div className=''>
                    <div className='flex flex-row items-center'>
                        <Title className='w-1/2' style={{color: '#006D38'}}>{dayjs(coach.departureTime).format("HH:mm")}</Title>              
                        <div className='w-1/2 pl-4 mx-2 space-x-2 flex flex-row items-center'><IconCar /><p className="text-base font-bold">{coach.coachTypeName}</p></div>
                       
                    </div>
                    <Row className='mx-2 space-x-2 flex flex-row items-center'><ClockCircleOutlined /><p className="text-xs font-bold"> Xuất bến: {coach.startPoint.location.district} - {coach.endPoint.location.district}</p></Row>
                    <div className='mx-2 space-x-2 flex flex-row items-center truncate'>
                        <IconTP />
                        <p>Lộ trình: {coach.travelPath.detail}</p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <BluePoint />
                        <p className='truncate'>{coach.startPoint.location.district} = Trung chuyển đón </p>
                    </div>
                    <div className='space-x-2 flex flex-row items-center'>
                        <RedPoint />
                        <p className='truncate'>{coach.endPoint.location.district} = Trung chuyển trả</p>
                    </div>
                </div>

                <div className=''>
                    <div className='flex flex-row mx-3'>
                    <Title className='w-3/4' level={3}>{coach.price}đ</Title>
                    <Button
                    className='w-1/3 flex justify-end' 
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