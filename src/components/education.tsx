import"../style/education.css";
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
            <h1>Education</h1>
            <p>Trusted by professionals for Exceptional Quality and Services Our clients from various
                industries trust us to deliver top-notch quality and result.Here's what they have to say 
                aboout our work.</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Sir Syed University of Engineering and Technology</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                   <h1> Bachelor in Computer Engineering </h1>
                   <p>I am pursuing a Bachelor's degree in Computer Engineering at the prestigious
                   Sir Syed University of Engineering and Technology, starting in 2024. This program will provide a solid
foundation in programming,hardware, software development, and data analysis.</p>
                </div>
            </div>
            {/* box2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governer IT Initiative</h1>
                    <span>Student</span>
                    
                </div>
                <div className="Computer">
                   <h1>Certified Web 3.0 and metaverse</h1>
                   <p>At the Governor IT Initiative, students explore AI, Metaverse, and Blockchain
technologies in an accessible manner. This free program is an excellent
opportunity for those interested in these innovative fields.</p>
                </div>
            </div>
            {/* box3 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Completed</span>
                </div>
                <div className="Computer">
                   <h1> Certificate of web training </h1>
                   <p>At Smit, students gain knowledge in web development, digital marketing. and
freelancing from exceptional teachers. They offer valuable mentorship, equipping
students with practical skills essential for career success.</p>
                </div>
            </div>
        </main>
    )
}
export default Education