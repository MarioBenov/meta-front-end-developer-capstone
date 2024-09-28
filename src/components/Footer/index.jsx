import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['inner']}>
        <div>
          <img src="icons_assets/Asset 9@4x.png" />
        </div>

        <div>
          <h2>Doormat Navigation</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Resrvations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <h2>Social Media Links</h2>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
