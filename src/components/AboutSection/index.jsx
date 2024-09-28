import styles from './AboutSection.module.css';
import ContentSection from '../ContentSection'

export default function AboutSection() {
  return (
    <ContentSection id="about">
      <div className={styles['about-section']}>
        <div className={styles['description']}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>

        <div className={styles['img-wrapper']}>
          <img src="icons_assets/Mario and Adrian A.jpg" alt="" />
          <img src="icons_assets/Mario and Adrian B.jpg" alt="" />
        </div>
      </div>
    </ContentSection>
  );
}
