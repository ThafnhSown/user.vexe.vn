import { Copyright } from "../../../assets/svgs"
import AdminHeader from "../components/AdminHeader"
import Banner from "../components/Banner"
import { CopyrightOutlined } from '@ant-design/icons'
import { useLocation } from "react-router-dom"


function AppLayout({ children }) {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <div>
    <div className='flex-col flex mobile:hidden desktop:flex bg-neutral'>
      <div className='grid grid-cols-12'>
        <div className='col-span-1 bg-white'></div>
        <div className='col-span-11 bg-white'>
          <AdminHeader />
        </div>
      </div>
      <div>
        <Banner />
      </div>
      
      <div className='grid grid-cols-12 mt-4 bg-neutral'>
        <div className='min-h-screen col-span-1'></div>
        <div className='min-h-screen col-span-10'>
          <div className='p-8 h-[calc(100%_-_64px)] bg-neutral'>{children}</div>
        </div>
        <div className='min-h-screen col-span-1'></div>
      </div>
      <footer className="bg-green flex justify-center">
        <div className="text-white">
          Bản quyền <CopyrightOutlined /> 2024 thuộc về vexe.vn
        </div>
      </footer>
    </div>
    <div className="desktop:hidden">
      <div>
        <AdminHeader />
      </div>
        <Banner/>
        
      <div className={`${pathName == '/tim-kiem' ? 'mt-8' : 'mt-48'} mx-4 bg-neutral `}>{children}</div>
      <footer className="bg-green flex justify-center mt-12">
        <div className="text-white">
          Bản quyền <CopyrightOutlined /> 2024 thuộc về vexe.vn
        </div>
      </footer>
    </div>
    </div>
    
  )
}

export default AppLayout
