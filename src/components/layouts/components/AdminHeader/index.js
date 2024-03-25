import { Link } from 'react-router-dom'
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Dropdown  } from 'antd'
import logo from '../../../../assets/logo.png'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import ModalSignup from '../../../../screens/app/user/components/ModalSignup'
import { useAppSelector } from '../../../../redux/hook'
import dayjs from 'dayjs'

function AdminHeader() {
  const searchInfo = useAppSelector((state) => state.userState.search)
  const [modal, setModal] = useState(false)
  const location = useLocation()
  const pathName = location.pathname
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
        <a onClick={() => setModal(true)}className="text-sm font-quicksand">
          Trở thành đối tác
        </a>
      )
    },
  ];

  return (
    <div>
    <div className='flex-row h-16 grid grid-cols-12 mobile:hidden desktop:grid'>
          <div className='flex flex-row items-center col-span-2 w-full'>
            <img src={logo}/>
          </div>
          <div className='col-span-6'/>
          <div className='flex flex-row items-center col-span-4'>
            <Link to="/" className='focus:text-green font-bold text-lg px-6'>
                Trang chủ
            </Link>
            <Link onClick={() => setModal(true)} className='focus:text-green font-bold text-lg px-6'>
                Trở thành đối tác
            </Link>
          </div>
      </div>
      <div className='desktop:hidden'>
        <div className={`${pathName == '/tim-kiem' ? 'bg-green space-x-4' : 'bg-white space-x-20'} h-20 flex items-center`}>
            <div className='flex justify-start ml-4'>
              {
                pathName == '/tim-kiem' ? <ArrowLeftOutlined onClick={() => navigate("/")} style={{color: 'white'}}/> :  <Dropdown menu={{items}}>
                  <MenuOutlined style={{color: 'black', size:'40px'}}/>
              </Dropdown >
              }
           
            </div>
            <div className={`${pathName == '/tim-kiem' ? 'flex flex-col' : 'hidden'}`}>
              <h1 className='text-white'>{searchInfo?.startPoint} - {searchInfo?.endPoint}</h1>
              <h1 className='text-white'>{dayjs(searchInfo?.time).format('DD/MM/YY')}</h1>
            </div>
            <img src={logo} className={`${pathName == '/tim-kiem' ? 'hidden' : ''}`}/>
        </div>
      </div>
      <div>
        {
          modal && <ModalSignup modalShow={modal} setModalShow={setModal}/>
        }
      </div>
    </div>
  )
}

export default AdminHeader
