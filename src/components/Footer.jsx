import Github from '../assets/github.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <a href="javascript:void(0)">
                <img src={Github} alt="github icon" />
            </a>
            <a href="javascript:void(0)">
                <img src={Twitter} alt="twitter icon" />
            </a>
        </footer>
    )
}

export default Footer