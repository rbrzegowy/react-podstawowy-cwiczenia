import s from './Sidenav.module.scss'

export default function Sidenav() {
  return (
    <aside className={s.aside}>
      <header className={s.header}>
        <img src="/public/logo_light.svg" alt="React logo" />
        <p>
          React <br />
          <span className={s.subheader}>ćwiczenia</span>
        </p>
      </header>
    </aside>
  )
}
