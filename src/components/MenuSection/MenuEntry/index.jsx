import styles from './MenuEntry.module.css'

export default function MenuEntry({
  title, price, description, image
}) {
  return (
    <div className={styles['menu-entry']}>
      <div className={styles['image']} style={{
        backgroundImage: `url("icons_assets/${image}")`,
      }}/>

      <div className={styles['content']}>
        <div className={styles['title']}>
          <h2>{title}</h2>
          <span >${price}</span>
        </div>

        <p style={{'flexGrow': 1}}>{description}</p>

        <div className={styles['delivery']}>
          <span>Order a delivery</span>
          <img src='icons_assets/delivery_bike.svg' width={24} height={24}/>
        </div>
      </div>
    </div>
  );
}
