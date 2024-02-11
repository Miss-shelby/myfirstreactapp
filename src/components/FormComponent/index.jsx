import { useState } from "react"
import TextField from "../inputs/TextFiled"
import TextArea from "../inputs/textarea"
import styles from  "./formcomponent.module.css"
import Button from "../Buttons"
const FormComponent = ()=>{
    return <div className={styles.FormWrapper}>
        <div>
            <h3 className={styles.heading}> An easy way to send requests to all suppliers</h3>
            <p className={styles.lead}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.</p>
        </div>
        <div className={styles.formElemetnsWrapper}>
            <Form></Form>
        </div>
    </div>
}

//creating a component inside a component
const Form =()=>{
    //setting our inputvalue with usesate
    const [value,setValue]=useState({})
    //creating our props function here to get the input value 
    const changeValue = (e)=>{
        //we destructure value because e is an object
        const {value} = e.target;
        console.log(value)
        setValue(value)
    }
    return <form className={styles.form}>
        {/* passing the value of TextField props which includes a function */}
        <TextField value={value} id='title' placeholder="what item you need?" onchangeHandler={changeValue}></TextField>
        <TextArea value={value} onchangeHandler={changeValue}></TextArea>
        <div className="btnWrapper"><Button variant='primary' size='medium'>Send Inquiry</Button></div>
    </form>
}

export default FormComponent;