import styles from './ContentSection.module.css';

export default function HeroSection({
  type = 'white',
  children = null,
  id = ''
}) {
  return (
    <section className={`${styles['content-section']} ${styles[type]}`} id={id}>
      {children}
    </section>
  );
}
