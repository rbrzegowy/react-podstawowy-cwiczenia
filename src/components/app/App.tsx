import Sidenav from '../sidenav/Sidenav'
import ValidHTML from '../valid-html/ValidHTML'
import './App.scss'
import './Exercises.scss'
import s from './App.module.scss'
import MultiplicationTable from '../multiplication-table/MultiplicationTable'

function App() {
  return (
    <>
      <Sidenav />
      <main className={s.main}>
        <div className={s.card}>
          <ValidHTML />
          <MultiplicationTable />
        </div>
      </main>
    </>
  )
}

export default App
