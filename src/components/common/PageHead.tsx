/* =======================================
 * 堀造園 ページHEAD
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
import React from 'react';
import styles from '@/styles/components/common/PageHead.module.scss';
import type { StaticImageData } from 'next/image';

type PageHeadProps = {
  title: string;
  backgroundImage?: StaticImageData;
};
const PageHead = ({ title, backgroundImage }: PageHeadProps) => {
  return (
    <section
      className={styles.containerPageHead}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : undefined,
      }}
    >
      <h2>{title}</h2>
    </section>
  );
};
export default PageHead;
