const convert = (point) => {
    if(point.isOffice) {
        const tmp = point.officeList.map(of => of.name)
        return point.description ? `tại ${point.description} hoặc ${tmp.join(' hoặc ')}` : `tại ${tmp.join(' hoặc ')}` 
    } else {
        return point.description ? `tại ${point.description}` : null
    }

}

export default convert