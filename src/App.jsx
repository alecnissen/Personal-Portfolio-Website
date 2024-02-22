// import './App.css'
import '../src/Styles/index.scss'
import Header from './Components/Header'
import TechStack from './Components/TechStack'
import WelcomeText from './Components/WelcomeText'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Footer from './Components/Footer'

function App() {

  return (
    <>
  <Header></Header>
  <WelcomeText></WelcomeText>
  <TechStack></TechStack>
  <Projects></Projects>
  <Resume></Resume>
  <Footer></Footer>
    </>
  )
}

export default App
