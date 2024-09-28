import styles from './MenuSection.module.css';
import ContentSection from '../ContentSection';
import Button from '../Button';
import {useMemo} from 'react';
import MenuEntry from './MenuEntry';

const specials = [{
  title: 'Greek salad',
  price: 12.99,
  description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  image: 'greek salad.jpg'
}, {
  title: 'Bruschetta',
  price: 5.99,
  description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  image: 'bruchetta.svg'
}, {
  title: 'Lemon Dessert',
  price: 5.00,
  description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  image: 'lemon dessert.jpg'
}]

export default function MenuSection() {
  const menuSpecials = useMemo(() => specials.map((special) => (
    <MenuEntry key={special.title} {...special } />
  )), [])

  return (
    <ContentSection>
      <div className={styles['menu-section']}>
        <div className={styles['header-row']}>
          <h1>This weeks specials!</h1>
          <Button>Online Menu</Button>
        </div>

        <div className={styles['menu-list']}>
          {menuSpecials}
        </div>
      </div>
    </ContentSection>
  );
}
