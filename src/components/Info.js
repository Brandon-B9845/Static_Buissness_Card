

export default function Info() {
    return (
        <div className="info--container">
            <img className="info--headshot" src={require("./Stupid_monke.jpeg")} alt="a headshot of a monkey"></img>
            <h1 id="info--name" className="info--text center">Brandon Ballesteros</h1>
            <h2 id="info--jobTitle" className="info--text center">Software Engineer(You wish idiot)</h2>
            <p id="website-tag" className="info--text center white-text">Brandonballesteros.website</p>
            <div className="center">
                <button id="email-btn" className="info--btn"><i className="fa-solid fa-envelope"></i>Email</button>
                <button id="linkedIn-btn" className="info--btn" ><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>

        </div>
        
    )
}

