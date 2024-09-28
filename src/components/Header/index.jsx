import { useEffect, useMemo } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import styles from './Header.module.css';

const navOptions = [{
  label: 'Home',
  path: '/'
}, {
  label: 'About',
  path: '/#about'
}, {
  label: 'Menu',
  path: '/#menu'
}, {
  label: 'Reservations',
  path: '/booking'
}, {
  label: 'Order Online',
  path: '/order'
}, {
  label: 'Login',
  path: '/login'
}]

export default function Header() {
  const location = useLocation()
  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));

    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop : 0
    });
  }, [location.hash]);

  const options  = useMemo(() => navOptions.map(({path, label}) =>
    <li key={path}>
      <NavLink to={path}>{label}</NavLink>
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
