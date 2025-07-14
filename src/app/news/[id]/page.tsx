/* =======================================
 * 堀造園 お知らせ詳細
 * URL: src/app/news/[id]/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import bgImage from '@/assets/images/title-news-bg.webp';

import { notFound } from 'next/navigation';
import { newsData } from '@/data/newsData';
import LeftBan from '@/components/LeftBan';
import PageHead from '@/components/common/PageHead';
import Link from 'next/link';

export const generateMetadata = (): Metadata => ({
  title: 'お知らせ｜堀造園',
  description:
    '熊本県合志市にある堀造園は、和風・洋風の庭づくり、外構工事、剪定を手がける造園専門店。お客様の思いを形にする丁寧な提案と施工で理想の庭を実現します。',
});

export function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id }));
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${year}年${month}月${day}日`;
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PageNewsDetail({ params }: Props) {
  const { id } = await params;
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <PageHead title="お知らせ" backgroundImage={bgImage} />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockNewsDetail}>
            <time dateTime={newsItem.date}>{formatDate(newsItem.date)}</time>
            <h3>{newsItem.title}</h3>
            <div className={styles.itemDetail}>{newsItem.content}</div>
            <Link href="/news/" className={styles.linkList}>
              記事一覧
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
