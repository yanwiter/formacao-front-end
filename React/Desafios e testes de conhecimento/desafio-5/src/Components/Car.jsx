import React from 'react'
import styles from './Car.module.css'

const Car = ({car}) => {
  return (
    <div className={styles.card}>
        <p>{car.name} - {car.brand}</p>
    </div>
  )
}

export default Car