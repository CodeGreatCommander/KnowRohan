import Heading from "./heading";

function Block({header,children}){
    return(<div className="block">
        <div className="project-header">{header}</div>
        <div className="project-body">{children}</div>
    </div>)
}
export default function Projects({refe}){
    return(
        <div className="projects" ref={refe}>
            <Heading>Projects</Heading>
            <div className="body">
                
                <Block header={"Parking"}>A full-stack application for booking and reserving parking spots is a comprehensive software system designed to streamline the process of securing a parking space. This application offers a user-friendly interface where individuals can easily search for available parking spots in a specified location. Users can input their desired date and time, and then proceed to make reservations, ensuring that they have a secure and convenient place to park when needed. Behind the scenes, this application comprises a front-end interface for user interaction, a robust back-end server to handle reservations and payments, and a database to efficiently manage information about parking spots, their availability, and user bookings. Such a system simplifies the often-frustrating task of finding parking, enhancing user convenience and efficiency.</Block>
                <Block header={"SpamODetector"}>A machine learning model designed for spam email detection is a sophisticated algorithm that evaluates the content and characteristics of incoming emails to determine whether they are likely to be spam or legitimate messages. This model leverages a range of features extracted from the email text, including keywords, sender information, message structure, and more.<br/>Using a dataset of labeled emails (spam and non-spam), the model learns to distinguish between the two classes during the training phase. It then uses this knowledge to classify new, unseen emails into one of the two categories: spam or not spam.</Block>
                <Block header={"Voice to Text"}>This innovative app is a lifeline for the visually impaired, offering a range of features to enhance their daily lives. With voice-to-text functionality, it allows users to effortlessly convert spoken words into written text, making communication and information access more accessible. Additionally, the app goes a step further by providing voice-to-sign language translation, breaking down language barriers and enabling seamless interaction with the Deaf community. With support for a vast array of languages, this app is a powerful tool for inclusivity, connecting individuals across linguistic and communication divides.</Block>
                {/* <Block header={"Moodo"}>A captia filler for moodle</Block> */}
                <Block header={"COS Scraper"}>I undertook a project to analyze core courses at IIT Delhi using web scraping and data visualization. I developed a Python script to extract course data from the IIT Delhi website, identify core courses, and create a visual plot connecting them based on prerequisites. This project showcases my skills in data analysis, web scraping, and data visualization. Explore the resulting plot and code on my github</Block>
                <Block header={"Moodo"}>A chrome extension that helps you to fill in the moodle captia</Block>
                <Block header={"Sudoku Solver"}>A sudoku solver which can solve for you a standard 9-9 sudoku puzzle</Block>
            </div>
        </div>
    )
}