import git from "../assets/github.png"
import res from "../assets/resume.pdf"
export default function Navbar({ho,inte}) {
    return (<div className="navbar flex-row">
        <div className="navbar__logo">
            </div>
        <div className="flex-row navbar-list">
            <div className="navbar__item laptop" onClick={() => {if (ho.current) {ho.current.scrollIntoView({ behavior: 'smooth' });}}}>Home</div>
            <div className="navbar__item laptop" onClick={() => {if (inte.current) {inte.current.scrollIntoView({ behavior: 'smooth' });}}}>Interest</div>
            <div className="navbar__item laptop">Projects</div>
            <div className="navbar__item"><a href={res} download="cv.pdf">CV</a></div>
            <div className="navbar__item"><a href="https://github.com/CodeGreatCommander"><img src={git} className="github-image"/></a></div>
        </div>
    </div>)
}