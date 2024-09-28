import { useMemo } from 'react';
import styles from './Testimonial.module.css'

export default function MenuEntry({
  name, rating, image, reviewText
}) {
  const stars = useMemo(() =>
    Array.from({length: 5}).map((_, index) =>
      index <= rating ? '★' : '☆'
    )
  , [rating])

  return (
    <div className={styles['testimonial']}>
      <div className={styles['rating']}>
        {
          stars
        }
      </div>

      <div className={styles['user']}>
        <img src={image} alt="" />
        <span>{name}</span>
      </div>

      <p className={styles['review']}>
        {reviewText}
      </p>
    </div>
  );
}
