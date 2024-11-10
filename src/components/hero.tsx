import Image from "next/image";
import "../style/hero.css";

function Hero() {
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Muhammad Arsalan Zahid
                        Front-end Developer</h1>
                    <p className="des-hero">Hi ,a passionate Frontend Developer with 2 years of experience building responsive, user-friendly websites and applications. My journey into web development started with a love for design and technology, and now I specialize in creating visually appealing, fast, and interactive user interfaces.</p>
                    <button className="hero-btn" >HIRE ME</button>
                </div>
             </div>
        </div>
    )
}
export default Hero 