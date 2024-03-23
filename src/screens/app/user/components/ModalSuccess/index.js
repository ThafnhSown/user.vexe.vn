import { Modal, Typography } from "antd"
import { useEffect, useState } from "react"
const { Title } = Typography
import { Success } from "../../../../../assets/svgs"

const ModalSuccess = (props) => {
    const { modalShow, setModalShow, setFatherClose } = props

    return (
        <Modal 
            open={modalShow}
            footer={(_, { OkBtn, CancelBtn }) => (
                <div>
                </div>
              )}
            onCancel={() => {
                setModalShow(false)
                setFatherClose(false)
            }}
            width={800}
        >
           <div className="flex flex-col justify-center items-center">
                <Success />
                <Title level={3}>Cảm ơn bạn đã liên hệ!</Title>
                <Title level={3}>Chúng tôi sẽ liên hệ với bạn trong vòng 24h tới.</Title>
           </div>
        </Modal>
    ) 
}

export default ModalSuccess