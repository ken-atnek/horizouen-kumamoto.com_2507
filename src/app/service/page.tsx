/* =======================================
 * 堀造園 サービス一覧ページ
 * URL: src/app/portfolio/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';

import LeftBan from '@/components/LeftBan';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-service-bg.webp';
import DetailService from '@/components/DetailService';
export const generateMetadata = (): Metadata => {
  return {
    title: 'サービス一覧｜堀造園',
    description:
      '熊本県合志市にある堀造園は、和風・洋風の庭づくり、外構工事、剪定を手がける造園専門店。お客様の思いを形にする丁寧な提案と施工で理想の庭を実現します。。',
  };
};
export default function PageService() {
  return (
    <>
      <PageHead title="サービス一覧" backgroundImage={bgImage} />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockContents}>
            <DetailService />
          </div>
        </article>
      </section>
    </>
  );
}
