/* =======================================
 * 堀造園 代表者挨拶
 * URL: src/components/DetailGreeting.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import styles from '@/styles/components/Details.module.scss';
import Profile from '@/assets/images/profile.webp';
import Image from 'next/image';
const DetailGreeting = () => {
  return (
    <div className={styles.wrapDetails}>
      <h3>代表者挨拶</h3>
      <div className={`${styles.itemDetail} ${styles.detailGreeting}`}>
        <figure className={styles.itemImage}>
          <Image src={Profile} alt="代表者挨拶" width={253} height={289} />
          <figcaption>堀　幸治</figcaption>
        </figure>

        <p>
          私は植物のことを大切にし、美しい空間を作り出すことに情熱を注いでいます。
          <br />
          庭や公園、そしてインテリアの植物まで、幅広いニーズに対応いたします。
          <br />
          お客様のご要望やお悩みに寄り添いながら、最適な植物の選定や手入れ方法を提案いたします。
          <br />
          素晴らしい植物たちと共に、心地よい緑の空間をお届けします。
          <br />
          どうぞお気軽にお問い合わせください。よろしくお願いします！
        </p>
      </div>
    </div>
  );
};

export default DetailGreeting;
