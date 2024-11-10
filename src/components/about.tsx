import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
function About() {
    return(

        <div className="header-container">
             <div className="header-boxes-con">
                {/* left */}
                <div>
                 <Image src={"/images/arsalan.png"}
                 width={200}
                 height={200}
                 className="header-image"
                 alt="Profile"/>
                <div className="social-icon">
                <Link href={"https://youtube.com/@aifuturetechnology-yt6rv?si=cL_o7NfAzeIaKHRW"}><FaYoutube className="s-icon1"/></Link>
                 <Link href={"https://www.facebook.com/profile.php?id=100093024694857&mibextid=ZbWKwL"}><FaFacebook  className="s-icon2"/></Link>
                 <Link href={"https://www.instagram.com/zahidmuhammad23?igsh=YzljYTk1ODg3Zg=="}><FaInstagram  className="s-icon3"/></Link>
                 <Link href={"https://www.linkedin.com/in/muhammad-arsalan-zahid-aa255b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin className="s-icon4"/></Link>
                </div>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About us</h1>
                    <p className="des-hero">Hi, I'm Muhammad Arsalan Zahid, a passionate Frontend Developer with 2 years of experience building responsive, user-friendly websites and applications. My journey into web development started with a love for design and technology, and now I specialize in creating visually appealing, fast, and interactive user interfaces.

I am skilled in HTML, CSS, JavaScript, and popular frontend frameworks like React.js and Vue.js. I take pride in writing clean, efficient code that ensures a seamless user experience across different devices and browsers. Whether it's turning a wireframe into a fully functional website or optimizing an app for performance, I approach each project with attention to detail and a focus on user-centric design.</p>
                    
                </div>
             </div>
        </div>
    )
}
export default About