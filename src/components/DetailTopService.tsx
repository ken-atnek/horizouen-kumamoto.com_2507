/* =======================================
 * 堀造園 サービス一覧
 * URL: src/components/DetailTopService.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
'use client';
import styles from '@/styles/components/Details.module.scss';
import Image from 'next/image';
import ServiceImage01 from '@/assets/images/service/list01.webp';
import ServiceImage02 from '@/assets/images/service/list02.webp';
import ServiceImage03 from '@/assets/images/service/list03.webp';

import { useMemo } from 'react';
import Link from 'next/link';

const DetailTopService = () => {
  const ListData = useMemo(
    () => [
      {
        title: '庭木の剪定',
        image01: ServiceImage01,
        description: (
          <>
            庭木1本からOK!お庭や会社の生垣など伸びてしまった木々のお手入れをいたします。
          </>
        ),
      },
      {
        title: '草刈り',
        image01: ServiceImage02,
        description: (
          <>
            お客様のご要望に合わせて、草刈り、芝刈りをいたします。生い茂ってしまった雑草もお任せください。
          </>
        ),
      },
      {
        title: '伐採・伐根',
        image01: ServiceImage03,
        description: (
          <>
            お庭や会社にある枯れてしまった木や不要になった木の伐採・伐根をいたします。
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>サービス</h3>
      <div className={`${styles.itemDetail} ${styles.detailTopService}`}>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <div className={styles.itemImage}>
                <Image
                  src={item.image01}
                  alt={item.title}
                  width={253}
                  height={190}
                />
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/service/" className={styles.linkMore}>
        <span>more</span>
      </Link>
    </div>
  );
};

export default DetailTopService;
