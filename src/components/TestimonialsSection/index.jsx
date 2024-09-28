import ContentSection from '../ContentSection'
import Testimonial from './Testimonial'
import styles from './TestimonialsSEction.module.css'

const testimonials = [{
  name: 'user1',
  rating: 1,
  image: 'icons_assets/greek salad.jpg',
  reviewText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}, {
  name: 'user2',
  rating: 2,
  image: 'icons_assets/greek salad.jpg',
  reviewText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}, {
  name: 'user3',
  rating: 3,
  image: 'icons_assets/greek salad.jpg',
  reviewText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}, {
  name: 'user4',
  rating: 4,
  image: 'icons_assets/greek salad.jpg',
  reviewText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}]

export default function HeroSection() {
  return (
    <ContentSection type="green">
      <div className={styles['testimonials-section']}>
        <h1>Testimonials</h1>
        <div className={styles['testimonial-list']}>
          {
            testimonials.map((t, index) => <Testimonial {...t} key={index}/>)
          }
        </div>
      </div>
    </ContentSection>
  );
}
