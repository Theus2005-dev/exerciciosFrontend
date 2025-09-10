import ProfileIcon from "../../icons/Profile-icon"
import './header.css';
export default function Header(){
    return(
         <header className="header">
             <ProfileIcon></ProfileIcon>
             <h1>Profile</h1>    
         </header>
    )
}