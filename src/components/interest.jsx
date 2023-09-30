import Heading from "./heading";

function Block({header,children}){
    return(<div className="block">
        <div className="interest-header">{header}</div>
        <div className="interest-body">{children}</div>
    </div>)
}

export default function Interest({refer}){
    return(
        <div className="interest" ref={refer}>
            <Heading>Interest</Heading>
            <Block header="Research Interest"><ul><li>Statistics and Probability</li>
            <li>Machine Learning and LLM’s</li>
            <li>Computer Vision</li>
            <li>Algorithms</li>
            <li>Compiler Designing</li>
            <li>Graph and Game Theory</li></ul></Block>
            <Block header="Technical Interest"><ul><li>Full Stack Development</li>
            <li>Block Chain Development</li>
            <li>ML &AI</li>
            <li>CV</li></ul></Block>
        </div>
    )
}