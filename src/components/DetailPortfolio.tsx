/* =======================================
 * 堀造園 施工実績
 * URL: src/components/DetailPortfolio.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
'use client';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Details.module.scss';
import Image from 'next/image';
import PortfolioImage01a from '@/assets/images/portfolio/list01a.webp';
import PortfolioImage01b from '@/assets/images/portfolio/list01b.webp';
import PortfolioImage02a from '@/assets/images/portfolio/list02a.webp';
import PortfolioImage02b from '@/assets/images/portfolio/list02b.webp';
import PortfolioImage03a from '@/assets/images/portfolio/list03a.webp';
import PortfolioImage03b from '@/assets/images/portfolio/list03b.webp';
import PortfolioImage04a from '@/assets/images/portfolio/list04a.webp';
import PortfolioImage04b from '@/assets/images/portfolio/list04b.webp';
import PortfolioImage05a from '@/assets/images/portfolio/list05a.webp';
import PortfolioImage05b from '@/assets/images/portfolio/list05b.webp';

import { useMemo } from 'react';
import Link from 'next/link';

const DetailPortfolio = () => {
  const pathname = usePathname();
  const ListData = useMemo(
    () => [
      {
        title: '庭木の剪定',
        image01: PortfolioImage01a,
        image02: PortfolioImage01b,
      },
      {
        title: '草刈り',
        image01: PortfolioImage02a,
        image02: PortfolioImage02b,
      },
      {
        title: '防草シート・人工芝施工',
        image01: PortfolioImage03a,
        image02: PortfolioImage03b,
      },
      {
        title: '植栽',
        image01: PortfolioImage04a,
        image02: PortfolioImage04b,
      },
      {
        title: '伐採',
        image01: PortfolioImage05a,
        image02: PortfolioImage05b,
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>施工実績</h3>
      <div className={`${styles.itemDetail} ${styles.DetailPortfolio}`}>
        <ul>
          {(pathname === '/' ? ListData.slice(0, 3) : ListData).map(
            (item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
                <figure className={styles.itemImage}>
                  <Image src={item.image01} alt={item.title} />
                  <figcaption>before</figcaption>
                </figure>
                <figure className={styles.itemImage}>
                  <Image src={item.image02} alt={item.title} />
                  <figcaption>after</figcaption>
                </figure>
              </li>
            )
          )}
        </ul>
      </div>
      {pathname === '/' && (
        <Link href="/contact/" className={styles.linkMore}>
          <span>more</span>
        </Link>
      )}
      {pathname === '/portfolio/' && (
        <Link href="/contact/" className={styles.linkContact}>
          無料見積り・ご依頼はこちら
        </Link>
      )}
    </div>
  );
};

export default DetailPortfolio;
