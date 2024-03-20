export const regexNumber = (num) => {
    
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    const res = num.toString().replace(regex, '$1.');
    return res
}
