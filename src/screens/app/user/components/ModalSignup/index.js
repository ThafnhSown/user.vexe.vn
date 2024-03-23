import { Modal, Form, Typography, Input, Col, Row, Button, Select } from "antd"
import { useEffect, useState } from "react"
const { Title } = Typography
import { apiGetListProvince, apiSubmitRequest } from "../../../../../api/services"
import './style.css'
import ModalSuccess from "../ModalSuccess"

const ModalSignup = (props) => {
    const { modalShow, setModalShow } = props
    const [success, setSuccess] = useState(false)
    const [listProvince, setListProvince] = useState([])
    const [form] = Form.useForm()

    const handleLoadProvince = async () => {
        const res = await apiGetListProvince()
        if(!res.data.error) {
            const tmp = res.data.data.map((p) => ({
                label: p.province,
                value: p.province
            }))
            setListProvince(tmp)
        }
    }

    const handleSubmit = async () => {
        // setModalShow(false)
        const data = form.getFieldsValue()
        const res = await apiSubmitRequest(data)
        if(!res.data.error) {
            setSuccess(true)
        }
    } 

    useEffect(() => {
        handleLoadProvince()
    }, [])

    return (
        <div>
        <Form form={form}>
        <Modal 
            open={modalShow}
            okText="Xác nhận"
             footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-center space-x-2">
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => handleSubmit()} className="h-10 text-lg">Xác nhận</Button>
                    </Form.Item>
                </div>
              )}
            onCancel={() => setModalShow(false)}
            width={800}
        >
            <Row className="justify-center">
                <Title level={3}>Đăng ký hãng xe</Title>
            </Row>
            <div className="border border-neutral my-2 w-full" />
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <label>Tên hãng xe</label>
                    <Form.Item name="name" className="flex flex-col">
                        <Input placeholder="Tên hãng xe" className="w-full"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <label>Số điện thoại liên hệ</label>
                    <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <div className="flex flex-row">
                            <Input placeholder="Số điện thoại liên hệ"/>
                        </div>
                    </Form.Item>
                </Col>
            </Row>
            <label>Các tỉnh/thành phố xe hoạt động</label>
                <Form.Item name="provinces">
                    <Select className="province" mode="multiple" placeholder="Các tỉnh/thành phố xe hoạt động" options={listProvince}/>
                </Form.Item>

            <label>Ghi chú</label>
            <Form.Item name="note">
                <Input placeholder="Nhập ghi chú"/>
            </Form.Item>
        </Modal>
       
        </Form>
        <div>
            {
                success && <ModalSuccess modalShow={success} setModalShow={setSuccess} setFatherClose={setModalShow}/>
            }
        </div>
        </div>
      
    ) 
}

export default ModalSignup