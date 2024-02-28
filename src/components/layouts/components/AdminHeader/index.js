import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.png'

function AdminHeader() {

  return (
      <div className='flex-row h-20 grid grid-cols-12'>
          <div className='flex flex-row items-center col-span-2 w-full'>
            <img src={logo}/>
          </div>
          <div className='col-span-5'/>
          <div className='flex flex-row items-center col-span-5'>
            <Link to="/" className='font-bold hover:text-green-600 text-lg px-6'>
                Trang chủ
            </Link>
            <Link to="/hang-xe" className='font-bold hover:text-green-600 text-lg px-6'>
                Hãng xe đăng ký
            </Link>
            <Link to="/tin-tuc" className='font-bold hover:text-green-600 text-lg px-6'>
                Tin tức
            </Link>
          </div>
      </div>
  )
}

export default AdminHeader
