/* =======================================
 * 堀造園 レフトバナー
 * URL: src/components/LeftBan.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import LinkBan01 from '@/assets/images/left-ban01.webp';
import LinkBan02 from '@/assets/images/left-ban02.webp';
import LinkBan03 from '@/assets/images/left-ban03.webp';
import LinkBan04 from '@/assets/images/left-ban04.webp';
import Link from 'next/link';
import styles from '@/styles/components/LeftBan.module.scss';

const LeftBan = () => {
  return (
    <nav className={styles.leftList}>
      <div>
        <Image src={LinkBan01} alt="堀造園" />
      </div>
      <div>
        <Link href="/contact/">
          <Image src={LinkBan02} alt="お見積・ご依頼" />
        </Link>
      </div>
      <div>
        <ExternalLink
          href="https://page.line.me/068impcw?oat_content=url&openQrModal=true"
          className={styles.itemSns}
        >
          <Image
            src={LinkBan03}
            alt="堀造園のインスタグラム"
            width={100}
            height={100}
          />
        </ExternalLink>
      </div>
      <div>
        <ExternalLink
          href="https://page.line.me/068impcw?oat_content=url&openQrModal=true"
          className={styles.itemSns}
        >
          <Image src={LinkBan04} alt="堀造園のLINE" width={100} height={100} />
        </ExternalLink>
      </div>
    </nav>
  );
};

export default LeftBan;
