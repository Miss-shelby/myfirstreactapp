import { UserAvatarWrapper,UserAvatar,UserAvatarText } from "./style";
//we call the styled components here 
const UserAvatarComponent = ()=>{
    return (
        <UserAvatarWrapper>
        <UserAvatar img={"https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
        <UserAvatarText>
            Hi,user lets get started
        </UserAvatarText>
     </UserAvatarWrapper>
    )
}
export default UserAvatarComponent;