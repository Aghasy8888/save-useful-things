import Image from 'next/image';
import styles from './NewsCardLarge.module.scss';

const ImageWidth_100Percent = ({ news }: { news: INews }) => {
  return (
      <Image
        src={news.imgSrc as string}
        alt="newsCardImg"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.newsCardImg}
        priority
      />
  );
};

export default ImageWidth_100Percent;
