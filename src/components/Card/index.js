import './infocard.css';
const InfoCard =({ variant,children,size})  =>{
    return(
        <div data-variant={variant} data-size={size} className='cardWrapper' > {children}</div>
    ) 
    
}
export default InfoCard;