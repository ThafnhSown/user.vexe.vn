import AdminHeader from "../components/AdminHeader"
import Banner from "../components/Banner"

function AppLayout({ children }) {
  return (
    <div className='flex-col flex' style={{backgroundColor: "#F3F3F3"}}>
      <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>
        <div className='col-span-11'>
          <AdminHeader />
        </div>
      </div>
      <div>
        <Banner />
      </div>
      
      <div className='grid grid-cols-12 mt-32' style={{backgroundColor: "#F3F3F3"}}>
        <div className='min-h-screen col-span-1'></div>
        <div className='min-h-screen col-span-10'>
          <div className='p-8 h-[calc(100%_-_64px)]' style={{backgroundColor: "#F3F3F3"}}>{children}</div>
        </div>
        <div className='min-h-screen col-span-1'></div>
      </div>
    </div>
  )
}

export default AppLayout
