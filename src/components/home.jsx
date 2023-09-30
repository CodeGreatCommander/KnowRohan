import skull from "../assets/skull.svg"
import ellipse from "../assets/Ellipse.svg"
export default function Home({refer}){
    return(
        <div className="home flex-row" ref={refer}>
            <div className="left-half">
                <div className="hello">HELLO ITS ME</div>
                <div className="name">Rohan<img src={ellipse} className="ellipse"/></div>
                <div className="body">Hey surfers!
Welcome to my website. I'm thrilled to have you here. I'm a full-time coder and part-time designer, specializing in exciting domains like AI/ML and web development. When I'm not immersed in code, you can find me passionately following sports or diving into thrilling gaming adventures. Let's connect and enjoy a match together!</div>
                <div className="scroll laptop">Scroll down for more</div>
                <hr className="laptop"/>
            </div>
            <div className="right-half laptop">
                <img src={skull} alt="skull my first design" className="skull"/>
            </div>
        </div>
    )
}