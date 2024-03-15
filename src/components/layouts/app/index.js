import { Copyright } from "../../../assets/svgs"
import AdminHeader from "../components/AdminHeader"
import Banner from "../components/Banner"
import { CopyrightOutlined } from '@ant-design/icons'
function AppLayout({ children }) {
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
      
      <div className='grid grid-cols-12 mt-32 bg-neutral'>
        <div className='min-h-screen col-span-1'></div>
        <div className='min-h-screen col-span-10'>
          <div className='p-8 h-[calc(100%_-_64px)] bg-neutral'>{children}</div>
        </div>
        <div className='min-h-screen col-span-1'></div>
      </div>
      <footer className="bg-green flex justify-center">
        <div className="text-white">
          Bản quyền <CopyrightOutlined /> 2023 thuộc về vexe.vn
        </div>
      </footer>
    </div>
    <div className="desktop:hidden">
      <div>
        <AdminHeader />
      </div>
        <Banner/>
      <div className="mt-44 bg-neutral">{children}</div>
    </div>
    </div>
    
  )
}

export default AppLayout
