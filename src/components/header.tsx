import Link from "next/link";
import "../style/header.css";
import Image from "next/image";

function Header(){
    return(
        <div className="header">
       {/* left */}
       <div>
       <Image src={"/images/logo.jpeg"} 
       width={80}
       height={70}
       className="logo1"
       alt="picture"
       />
       </div>
     {/* right */}
     <div className="header-right-div">
        <ul className="header-links">
            <li>
               <Link className="nav-links" href={"/"}>Home</Link>
            </li>
            <li>
               <Link className="nav-links" href={"/about"}>About</Link>
            </li>
            <li>
               <Link className="nav-links" href={"/contact"}>Contact</Link>
            </li>
        </ul>
     </div>
        </div> 
    )
}
export default Header