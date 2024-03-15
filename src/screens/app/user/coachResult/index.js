import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../redux/hook"
import CardCoach from "../components/CardCoach"
import ModalOrder from "../components/ModalOrder"
import { Card, Typography, Radio, Space, Row, Checkbox, Button } from 'antd'
import './style.css'
const { Title } = Typography

const CoachResult = () => {
    const listCompany = useAppSelector(state => state.userState.listCompany)
    const [modalShow, setModalShow] = useState(false)
    const [currentCoach, setCurrentCoach] = useState()
    const [checkList, setCheckList] = useState([])
    const [options, setOptions] = useState([])
    const [valueRadio, setValueRadio] = useState(0)
    const [listRes, setListRes] = useState([])
    const [filter, setFilter] = useState(false)
    const result = useAppSelector(state => state.userState.result)


    const onChange = (list) => {
        console.log(list)
        if(!list.length) {
            setFilter(false)
        } else {
            setFilter(true)
        }
        setCheckList(list)
        const tmp = result.filter(rs => list.includes(rs.coachCompany.name) == 1)
        setListRes(tmp)
      };

    useEffect(() => {
        const tmp = listCompany.map(com => com.name)
        setOptions(tmp)
    }, [])
    
    return (
        <div className="flex flex-row space-x-8 mobile:space-x-12">
            <div className="w-1/3 space-y-4 mobile:hidden desktop:flex flex-col">
                <Card>
                    <Title level={4}>Sắp xếp</Title>
                    <Radio.Group onChange={() => console.log("value")} defaultValue={1}>
                        <Space direction="vertical">
                            <Radio value={1}>Mặc định</Radio>
                            <Radio value={2}>Giờ đi muộn nhất</Radio>
                            <Radio value={3}>Giờ đi sớm nhất</Radio>
                            <Radio value={4}>Giá vé tăng dần</Radio>
                            <Radio value={5}>Giá vé giảm dần</Radio>
                        </Space>
                    </Radio.Group>
                </Card>
                <Card>
                    <Title level={4}>Bộ lọc</Title>
                    <div>
                    <Title level={5}>Giờ đi</Title>
                    <Radio.Group onChange={(e) => {
                        setValueRadio(e.target.value)
                    }} className="space-y-2">
                        <Row className="space-x-2">
                            <Radio.Button value={1}>00:00 - 06:00</Radio.Button>
                            <Radio.Button value={2}>06:00 - 12:00</Radio.Button>
                        </Row>
                        <Row className="space-x-2">
                            <Radio.Button value={3}>12:00 - 18:00</Radio.Button>
                            <Radio.Button value={4}>18:00 - 00:00</Radio.Button>
                        </Row>
                    </Radio.Group>
                    </div>
                    <div className="mt-4">
                        <Title level={5}>Nhà xe</Title>
                        <Checkbox.Group options={options} onChange={onChange} value={checkList} />
                    </div>
                  
                </Card>
            </div>
            <div className="w-3/4 space-y-4">
                {
                    filter ? listRes.map(r => <CardCoach coach={r} currentCoach={currentCoach} setCurrentCoach={setCurrentCoach} modalShow={modalShow} setModalShow={setModalShow}/>) : result.map(r => <CardCoach coach={r} currentCoach={currentCoach} setCurrentCoach={setCurrentCoach} modalShow={modalShow} setModalShow={setModalShow}/>)
                }
                {
                    modalShow && <ModalOrder modalShow={modalShow} setModalShow={setModalShow} currentCoach={currentCoach} setCurrentCoach={setCurrentCoach}/>
                }
            </div>
        </div>
    )
}

export default CoachResult