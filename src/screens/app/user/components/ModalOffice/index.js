import { Modal } from "antd"
import { PhoneFilled } from '@ant-design/icons'
import InfiniteScroll from "react-infinite-scroll-component"
import OfficeProvince from "../OfficeProvince"

const ModalOffice = (props) => {
    const {data, logo, name, hotline, modalShow, setModalShow} = props
    console.log(logo)
    return (
        <div>
            <Modal
             footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-center space-x-2">
                    {/* <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => handleSubmit()} className="h-10 text-lg">Xác nhận</Button>
                    </Form.Item> */}
                </div>
              )}
            width={800}
            open={modalShow}
            onCancel={() => setModalShow(false)}>
                <div className="flex flex-col mobile:hidden desktop:flex">
                    <div className="flex flex-row border border-dashed p-2 space-x-3 w-11/12">
                        <img src={logo} className="w-16 h-16 rounded-full"/>
                        <div className="flex flex-col">
                            <div className="text-2xl font-extrabold">{name}</div>
                            <div className="flex flex-row space-x-2">
                                <PhoneFilled style={{color: '#006D38'}}/>
                                <div className="text-xl font-bold flex flex-row space-x-2">
                                    <p>Hotline: </p>
                                    <p>{hotline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mobile:flex desktop:hidden">
                    <div className="flex flex-row border border-dashed p-2 space-x-3 w-11/12">
                        <img src={logo} className="w-12 h-12 rounded-full"/>
                        <div className="flex flex-col">
                            <div className="text-md font-extrabold">{name}</div>
                            <div className="flex flex-row space-x-2">
                                <PhoneFilled style={{color: '#006D38'}}/>
                                <div className="text-md font-bold flex flex-row space-x-2">
                                    <p>Hotline: </p>
                                    <p>{hotline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <InfiniteScroll dataLength={100} style={{height: '600px'}}>
                        {
                            data.map(province => <OfficeProvince province={province}/>)
                        }
                    </InfiniteScroll>
                </div>
            </Modal>
        </div>
      
    ) 
}

export default ModalOffice