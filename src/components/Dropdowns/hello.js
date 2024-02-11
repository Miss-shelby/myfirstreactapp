const name ='Ammie'
const greeting=()=>{
    return <p> welcome to my page</p>
}
const  Hello = ()=>{
    return <h2>hello {name} {greeting()}</h2>
}
export const Profile=({name,children})=>{
    return <h4 data-variant={name}>This is {name} profile{children}</h4>
}
export default Hello;