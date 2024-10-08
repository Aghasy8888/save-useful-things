import React from 'react'
import Image from 'next/image';
import styles from './NextImageWidth100.scss'; 

const NextImageWidth100 = () => {
  return (
    <div className={styles.imgContainer}>
        <Image
          alt="product"
          src={imageURLs[0]}
          className={styles.image}
          layout="fill"
          priority
        />
      </div>
  )
}

export default NextImageWidth100
