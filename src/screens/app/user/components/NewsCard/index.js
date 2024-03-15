import { Card } from 'antd'
import news from '../../../../../assets/news.png'

const NewsCard = () => {
    return (
        <div>
            <div>
                <img src={news}/>
                <h1 className='font-bold truncate'>Nhận ưu đãi 400K khi đăng ký</h1>
                <p>Nhận ưu đãi 400K khi đăng ký mở thẻ tín dụng BIDV đọc quyền hệ thống vexe.vn</p>

                <p className='mt-3'>Th5, 12/10/2023</p>
            </div>
        </div>
    )
}

export default NewsCard