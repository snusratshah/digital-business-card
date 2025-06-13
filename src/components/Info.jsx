import avatar from "../avatar.jpg"

export default function Info () {
    return (
    <>
        <img className="avatar" src={avatar} alt="Person with glasses looking into camera."/>
        <div className="info">
            <h1>John Doe</h1>
            <p className="profession">Frontend Developer</p>
            <a className="website" href="www.johndoe.com">johndoe.com</a>
            <a href="mailto:contact@example.com" className="email-btn">
                <i className="fa-solid fa-envelope"></i>
                Email
            </a>
        </div>
    </>
    )
}