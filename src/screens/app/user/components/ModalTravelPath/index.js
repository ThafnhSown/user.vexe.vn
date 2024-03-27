const { Modal } = require("antd")

const ModalTravelPath = (props) => {
    const {tp, modalShow, setModalShow} = props
    return (
        <div>
            <Modal
            open={modalShow}
            onCancel={() => setModalShow(false)}
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-center space-x-2">
                    {/* <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => handleSubmit()} className="h-10 text-lg">Xác nhận</Button>
                    </Form.Item> */}
                </div>
              )}
            width={720}
            centered
            className="flex flex-col"

            >
                <div className="mobile:text-lg desktop:text-2xl font-extrabold text-green">Lộ trình chi tiết: </div>
                <div className="mobile:text-md desktop:text-xl font-bold">
                    {tp}
                </div>
            </Modal>
        </div>
    )
}

export default ModalTravelPath