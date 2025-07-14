/* =======================================
 * 堀造園 TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';

import TopSlide from '@/components/TopSlide';
import LeftBan from '@/components/LeftBan';
import DetailConcept from '@/components/DetailConcept';
import DetailQuestions from '@/components/DetailQuestions';
import DetailPortfolio from '@/components/DetailPortfolio';
import DetailTopService from '@/components/DetailTopService';
import DetailFlow from '@/components/DetailFlow';
import DetailNewsList from '@/components/DetailNewsList';

export const generateMetadata = (): Metadata => {
  return {
    title: '堀造園',
    description:
      '熊本県合志市にある堀造園は、和風・洋風の庭づくり、外構工事、剪定を手がける造園専門店。お客様の思いを形にする丁寧な提案と施工で理想の庭を実現します。',
  };
};
export default function Home() {
  return (
    <>
      <TopSlide />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockContents}>
            <DetailNewsList />
            <DetailConcept />
            <DetailTopService />
            <DetailPortfolio />
            <DetailFlow />
            <DetailQuestions />
          </div>
        </article>
      </section>
    </>
  );
}
