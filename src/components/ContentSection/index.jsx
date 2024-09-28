import styles from './ContentSection.module.css';

export default function HeroSection({
  type = 'white',
  children = null
}) {
  return (
    <section className={`${styles['content-section']} ${styles[type]}`}>
      {children}
    </section>
  );
}
