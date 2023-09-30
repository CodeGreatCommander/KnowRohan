import Heading from "./heading";

function Block({type,name,time}){
    return(
        <div>
            <div className="type">{type}</div>
            <div className="name">{name}</div>
            <div className="time">{time}</div>
        </div>
    )
}

export default function Education(){
    return(
        <div className="education">
            <Heading>Education</Heading>
            <div className="flex-row">
                <Block type="PRIMARY AND SECONDARY" name="City Montessori School" time="2010-2022"/>
                <Block type="UNDERGRADUATE" name="IIT Delhi" time="2022-Present"/>
            </div>
        </div>
    )
}