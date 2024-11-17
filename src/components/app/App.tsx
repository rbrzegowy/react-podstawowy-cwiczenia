import Sidenav from '../sidenav/Sidenav'
import ValidHTML from '../valid-html/ValidHTML'
import './App.scss'
import s from './App.module.scss'

function App() {
  return (
    <>
      <Sidenav />
      <main className={s.main}>
        <div className={s.card}>
          <ValidHTML />
        </div>
      </main>
    </>
  )
}

export default App
