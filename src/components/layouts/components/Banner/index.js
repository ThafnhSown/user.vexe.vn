import banner from '../../../../assets/banner.png'
import FindCoach from '../FindCoach'

const Banner = () => {
    return (
        <div className='flex items-center flex-row justify-center'>
            <div className='flex items-center flex-col relative' style={{backgroundColor:'#f3f3f3'}}>
                <img src={banner} className='w-max h-auto z-0'/>
                
            </div>
                <FindCoach className='z-10'/>
        </div>
           
    ) 
}

export default Banner