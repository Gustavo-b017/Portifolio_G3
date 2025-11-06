import "/public/style/app.scss"
import Integrante from "./Sections/Integrante"
import Main from "./Sections/Main"
import Menu from "./Sections/Menu"
import Projeto from "./Sections/Projeto"
import Footer from "./Sections/Footer"

function App() {

  return (
    <body>
      <Menu />
      <Main />
      <Integrante />
      <Projeto />
      <Footer />
      </body>
  )
}

export default App
