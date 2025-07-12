/* =======================================
 * 堀造園 会社概要/お問合せ
 * URL: src/app/contact/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';

import LeftBan from '@/components/LeftBan';
import PageHead from '@/components/common/PageHead';
import bgImage from '@/assets/images/title-contact-bg.webp';
import DetailCompany from '@/components/DetailCompany';
import DetailGreeting from '@/components/DetailGreeting';
import DetailForm from '@/components/DetailForm';
export const generateMetadata = (): Metadata => {
  return {
    title: '会社概要/お問合せ｜西川塗装',
    description:
      '熊本県合志市にある堀造園は、和風・洋風の庭づくり、外構工事、剪定を手がける造園専門店。お客様の思いを形にする丁寧な提案と施工で理想の庭を実現します。。',
  };
};
export default function PageContact() {
  return (
    <>
      <PageHead title="会社概要/お問合せ" backgroundImage={bgImage} />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockContents}>
            <DetailGreeting />
            <DetailCompany />
            <DetailForm />
          </div>
        </article>
      </section>
    </>
  );
}
