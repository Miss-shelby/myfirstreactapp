import styles from "./button.module.css"
const Button = ({variant,size,fullwidth,children}) => {
  return(
  <button 
   data-variant={variant}
   data-size={size}
   data-fullwidth={fullwidth}
   className={styles.btn}
  > 
  {children} 
  </button>
) 
};

export default Button;
