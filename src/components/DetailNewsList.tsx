/* =======================================
 * 堀造園  お知らせ一覧
 * URL: src/components/DetailNewsList.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
'use client';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Details.module.scss';
import Link from 'next/link';
import { newsData } from '@/data/newsData';
const DetailNewsList = () => {
  const pathname = usePathname();
  return (
    <div className={styles.wrapDetails}>
      {pathname === '/' && <h3>お知らせ</h3>}
      <div className={`${styles.itemDetail} ${styles.detailNewsList}`}>
        <ul>
          {newsData.map((item) => (
            <li key={item.id}>
              <Link href={`/news/${item.id}`}></Link>
              <div className={styles.date}>{item.date}</div>
              <h4>
                <span>{item.title}</span>
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailNewsList;
