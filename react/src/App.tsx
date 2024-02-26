import { Navbar } from "./components/Navbar/Navbar" 
import Products from "./pages/Products/Products"
import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.page}>
      <Navbar/>
      <Products />
    </div>
  )
}

export default App
