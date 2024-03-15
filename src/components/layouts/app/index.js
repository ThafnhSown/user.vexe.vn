import AdminHeader from "../components/AdminHeader"
import Banner from "../components/Banner"

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
