import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Avatar from './assets/avatar.jpg'
import './App.css'

const App = () => {
    return (
        <div className='card'>
            <header>
                <img src={Avatar} alt=" headshot of Abdulsalam" className="header--image" />
            </header>
            <main>
                <Info />
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

export default App