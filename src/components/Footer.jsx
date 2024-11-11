import Github from '../assets/github.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/dmystical-coder" target='_blank'>
                <img src={Github} alt="github icon" />
            </a>
            <a href="https://twitter.com/dmystical_coder" target='_blank'>
                <img src={Twitter} alt="twitter icon" />
            </a>
        </footer>
    )
}

export default Footer