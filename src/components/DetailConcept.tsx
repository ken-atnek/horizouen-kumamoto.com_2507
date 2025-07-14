/* =======================================
 * 堀造園 コンセプト
 * URL: src/components/DetailConcept.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import styles from '@/styles/components/Details.module.scss';
import Concept from '@/assets/images/detail-concept.webp';
import Image from 'next/image';
const DetailConcept = () => {
  return (
    <div className={styles.wrapDetails}>
      <h3>コンセプト</h3>
      <div className={`${styles.itemDetail} ${styles.detailConcept}`}>
        <div className={styles.itemImage}>
          <Image src={Concept} alt="コンセプト" fill />
        </div>
        <h4>庭木1本からのご依頼OK・お見積り無料</h4>
        <p>
          庭木の剪定はもちろん、草刈り、伐採・伐根、防草シート施工、植栽など、お庭に関するお困りごとをトータルサポートいたします。堀造園では、実際にお庭を拝見し、ご依頼内容の無料お見積りをご提案させていただきます。また、お客様とお話をさせていただきながら細かな要望でもご希望に添えるようお応えいたします。
          <br />
          即対応、即実行を心掛けしており、まずはお気軽にお問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default DetailConcept;
