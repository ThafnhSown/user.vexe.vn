import OfficeCard from "../OfficeCard"
import InfiniteScroll from "react-infinite-scroll-component"

const OfficeProvince = ({province}) => {
    return (
        <div className="p-2">
            <h1 className="mobile: text-md desktop:text-xl font-bold bg-neutral text-green">Văn phòng tại {province.province}</h1>
            <div className="bg-neutral p-2 space-y-3">
                {
                    province.offices.map(of => <OfficeCard office={of}/>)
                }
            </div>
        </div>
    )
}

export default OfficeProvince