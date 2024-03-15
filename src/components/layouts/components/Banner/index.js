import banner from '../../../../assets/banner.png'
import FindCoach from '../FindCoach'

const Banner = () => {
    return (
        <div className='flex items-center flex-row justify-center relative'>
            <div className='flex items-center flex-col relative' style={{backgroundColor:'#f3f3f3'}}>
                <img src={banner} className='max-w-full'/>
            </div>
            <FindCoach />
        </div>
           
    ) 
}

export default Banner