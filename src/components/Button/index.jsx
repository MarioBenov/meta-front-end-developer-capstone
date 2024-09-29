import styles from './Button.module.css'
import {noop} from 'lodash'

export default function Button({
  kind = 'primary',
  onClick = noop,
  children = null,
  ...attrs
}) {
  return (
    <button className={`${styles['button']} ${styles[kind]}`} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
}
