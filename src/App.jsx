import { Post } from './components/Post'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'

import './Global.css'

import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post
          author="Eygon"
          content="texto"
          />
<Post
          author="Eygon"
          content="texto"
          />
        </main>
      </div>
    </div>
  )
}

export default App
