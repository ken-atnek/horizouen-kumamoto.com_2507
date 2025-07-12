/* =======================================
 * 堀造園 ご依頼の流れ
 * URL: src/components/DetailFlow.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
'use client';
import styles from '@/styles/components/Details.module.scss';

import { useMemo } from 'react';

const DetailFlow = () => {
  const ListData = useMemo(
    () => [
      {
        title: 'お問い合わせ',
        description: <>電話・メールにてお問い合わせください。</>,
      },
      {
        title: '見積もり',
        description: <>お庭の見積りにお伺いいたします。</>,
      },
      {
        title: '作業',
        description: <>予約日時にお客様のところへお伺いし、作業いたします。</>,
      },
      {
        title: 'お支払い',
        description: (
          <>
            作業代金をお支払いいただきます。
            <em>クレジットカード支払いもＯＫ！！</em>
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>ご依頼の流れ</h3>
      <div className={`${styles.itemDetail} ${styles.detailFlow}`}>
        <h4>施工の流れ</h4>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>
              <div className={styles.itemNumber}></div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        <p className={styles.notice}>
          施工後に次回のご予約をしていだだけますと、次回の料金がお得になります。
        </p>
      </div>
    </div>
  );
};

export default DetailFlow;
