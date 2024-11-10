import"../style/work-history.css";
function WorkHistory(){
    return(
        <main className="edu-main">
            <div className="edu-text">
            <h1>Work History</h1>
            <p>I have grown through web development,professional traning,and academic achievements with continous dedication</p>
            </div>
            <div className="box-con-work">
                <div>
                    <h1 className="uni-name">Sir Syed University of Engineering and Technology</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                   <h1> Academic Journey - UK</h1>
                   <p>In 2024, I enrolled in the Sir Syed University of Engineering and Technology to pursue a Bachelors in Computer Engineering ,
                   combining academic knowledge with practical skills.</p>
                </div>
            </div>
            {/* box2 */}
            <div className="box-con-work">
                <div>
                    <h1 className="uni-name">Governer IT Initative</h1>
                    <span>Student</span>
                </div>
                <div className="Computer">
                   <h1> Giaic - Reaching Quarter 2</h1>
                   <p>Through hard work, I progressed to Quarter 2, mastering Al, Metaverse, Blockchain, and
                   tools like Nextjs and Tailwind CSS.</p>
                </div>
            </div>
            {/* box3 */}
            <div className="box-con-work">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Complete</span>
                </div>
                <div className="Computer">
                   <h1> Web - Journey </h1>
                   <p>I started by learning HTML, CSS, and JavaScript, building websites, freelancing, and
                   working on personal projects to sharpen my skills.</p>
                </div>
            </div>
        </main>
    )
}
export default WorkHistory