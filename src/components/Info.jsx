import Mail from '../assets/mail.svg'
import Linkedin from '../assets/linkedin.svg'

const Info = () => {
    return (
        <div className="info">
            <h1 className="info--name">Abdulsalam Baruwa</h1>
            <h2 className="info--title">Frontend Developer</h2>
            <a href="javascript:void(0)" className="info--url">abdulsalambaruwa.me</a>
            <div className="info--btn-group">
                <a href="javascript:void(0)" className="info--btn-group_btn">
                    <img src={Mail} alt="mail icon" />
                    <span className="btn--text">Email</span>
                </a>
                <a href="javascript:void(0)" className="info--btn-group_btn">
                    <img src={Linkedin} alt="mail icon" />
                    <span className="btn--text linkedin">Linkedin</span>
                </a>
            </div>
        </div>
    )
}

export default Info