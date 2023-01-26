export default function MainText(){
    return(
    <>
        <About />
        <Interests />
        </>
    )
}




function About(){
    return(
        <div className="about--container">
            <div className="center">
            <h2 id="about--title" className=" center white-text" >About: </h2>
            <h3 id="about--text" className="center white-text">I am an up and coming Software Engineer with a particular interest backend devolpment and database structuring. I am knowledgable in JS, React, and playwright.I am always learning new things and seeking out new challenges.</h3>
            </div>
        </div>
    )
}

function Interests(){
    return(
        <div className="interests--container">
            <div className="center">
            <h2 id="interests--title" className=" white-text">Interests:</h2>
            <h3 id="interests-text" className="center white-text">
                I love music and travelling. I enjoy living life to the fullest and overcoming new challenges as they arise.No mountain to tall or river too deep for me to overcome.
            </h3>
            </div>
        </div>
    )
}