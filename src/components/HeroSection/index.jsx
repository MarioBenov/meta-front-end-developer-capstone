import styles from './HeroSection.module.css';
import Button from '../Button';
import ContentSection from '../ContentSection'

export default function HeroSection() {
  return (
    <ContentSection type="green">
      <div className={styles['hero-section']}>
        <div className={styles['description']}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurang, focused on traditional recipes served with a modern twist.</p>
          <Button>Reserve a Table</Button>
        </div>

        <div className={styles['img-wrapper']}>
          <img src="icons_assets/restauranfood.jpg" alt="" />
        </div>
      </div>
    </ContentSection>
  );
}
