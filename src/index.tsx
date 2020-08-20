import * as React from 'react'
import styles from './styles.module.css'

const Loading: React.FC = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles.line}>
        <div className={styles.pen}>
          <div className={styles.pen_overlay} />
          <div className={styles.pen_top} />
          <div className={styles.pen_bottom} />
        </div>
      </div>
      <span>Page is Loading...Please Wait</span>
    </div>
  )
}

export default Loading
