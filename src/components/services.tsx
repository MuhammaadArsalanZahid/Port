import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { AiFillNotification } from "react-icons/ai";
import { AiFillSliders } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";

function Services(){
    return(
        <div>
            <main className="main">
                <div className="ser-container">
                  {/* top div */}
                  <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">I offer a wide range of services to help you build, enhance, and promote your brand. Whether you're looking to develop a website, design a mobile app, or even dive into digital marketing, I'm here to bring your ideas to life.</p>
                  </div>
                  {/* bottom div */}
                  <div className="boxes-con">
                      <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                      </div>
                      <div className="box">
                        < SiCodesignal className="ser-icon"/>
                        <h3>UI/UX Design</h3>
                        <span>Mobile App, Website Design</span>
                      </div>
                      <div className="box">
                        < CiMicrophoneOn className="ser-icon"/>
                        <h3>Sound Design</h3>
                        <span>Voice Over,Beat Marketing</span>
                      </div>
                      <div className="box">
                        <AiFillSliders className="ser-icon"/>
                        <h3>Trading</h3>
                        <span>Character Design,Crupto Fleet </span>
                      </div>
                      <div className="box">
                        <BsCameraReelsFill className="ser-icon"/>
                        <h3>Photography</h3>
                        <span>Portrait,Product Photography</span>
                      </div>
                      <div className="box">
                        < AiFillNotification className="ser-icon"/>
                        <h3>Advertising</h3>
                        <span>Digital Marketing,and Promotion</span>
                      </div>
                      
                      </div>
                </div>
            </main>
        </div>
    )
}
export default Services