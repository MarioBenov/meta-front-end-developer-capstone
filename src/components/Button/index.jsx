import styles from './Button.module.css'
import {noop} from 'lodash'

export default function Button({
  type = 'primary',
  onClick = noop,
  children = null
}) {
  return (
    <button className={`${styles['button']} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
