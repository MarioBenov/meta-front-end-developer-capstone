import {useMemo} from 'react';
import styles from './Header.module.css';

const navOptions = [{
  label: 'Home',
  path: '/'
}, {
  label: 'About',
  path: '/about'
}, {
  label: 'Menu',
  path: '/menu'
}, {
  label: 'Reservations',
  path: '/reservations'
}, {
  label: 'Order Online',
  path: '/order'
}, {
  label: 'Login',
  path: '/login'
}]

export default function Header() {
  const options  = useMemo(() => navOptions.map(({path, label}) =>
    <li key={path}>
      <a href={path}>{label}</a>
    </li>
  ), [])

  return (
    <header className={styles['app-header']}>
      <img className={styles['app-logo']} src="icons_assets/Logo.svg" alt="" />
      <nav>
        <ul>
          {options}
        </ul>
      </nav>
    </header>
  )
}
