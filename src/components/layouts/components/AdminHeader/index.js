import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import { Dropdown  } from 'antd'
import logo from '../../../../assets/logo.png'
import whiteLogo from '../../../../assets/white-logo.png'
import { useNavigate } from 'react-router'
function AdminHeader() {
  const navigate = useNavigate()
  const items = [
    {
      key: '1',
      label: (
        <a onClick={() => {
          navigate("/")
          }} className="text-sm font-quicksand">
          Trang chủ
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={() => {
          navigate("/hang-xe")
          }} className="text-sm font-quicksand">
          Hãng xe
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a onClick={() => {
          navigate("/")
          }} className="text-sm font-quicksand">
          Tin tức
        </a>
      )
    }
  ];

  return (
    <div>
    <div className='flex-row h-16 grid grid-cols-12 mobile:hidden desktop:grid'>
          <div className='flex flex-row items-center col-span-2 w-full'>
            <img src={logo}/>
          </div>
          <div className='col-span-5'/>
          <div className='flex flex-row items-center col-span-5'>
            <Link to="/" className='focus:text-green font-bold text-lg px-6'>
                Trang chủ
            </Link>
            <Link to="/hang-xe" className='focus:text-green font-bold text-lg px-6'>
                Hãng xe đăng ký
            </Link>
            <Link to="/tin-tuc" className='focus:text-green font-bold text-lg px-6'>
                Tin tức
            </Link>
          </div>
      </div>
      <div className='desktop:hidden'>
        <div className='bg-background h-20 flex items-center space-x-28'>
            <div className='flex justify-start ml-4'>
            <Dropdown menu={{items}}>
              <MenuOutlined style={{color: 'white', size:'40px'}}/>
            </Dropdown >
            </div>
            
            <img src={whiteLogo}/>
        </div>
      </div>
    </div>
      
  )
}

export default AdminHeader
