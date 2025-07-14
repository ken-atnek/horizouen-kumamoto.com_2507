/* =======================================
 * 堀造園  会社概要
 * URL: src/components/DetailCompany.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */
import ExternalLink from '@/components/common/ExternalLink';
import styles from '@/styles/components/Details.module.scss';
const DetailCompany = () => {
  return (
    <div className={styles.wrapDetails}>
      <h3>会社概要</h3>
      <div className={`${styles.itemDetail} ${styles.detailCompany}`}>
        <dl>
          <dt>会社名</dt>
          <dd>堀造園</dd>
        </dl>
        <dl>
          <dt>代表者</dt>
          <dd>堀　幸治</dd>
        </dl>
        <dl>
          <dt>所在地</dt>
          <dd>
            <address>
              <span>〒861-1104</span>熊本県合志市御代志1868-3
            </address>
          </dd>
        </dl>
        <dl>
          <dt>電話番号</dt>
          <dd>
            <ExternalLink
              href="tel:09020837643"
              aria-label="090-2083-7643に電話"
              className={styles.itemTel}
            >
              090-2083-7643
            </ExternalLink>
          </dd>
        </dl>

        <dl>
          <dt>営業時間</dt>
          <dd>
            <span>8:00~17:00</span>
            <span>※時間外でもお気軽にお問合せください</span>
          </dd>
        </dl>
        <dl>
          <dt>定休日</dt>
          <dd>不定休</dd>
        </dl>
        <dl>
          <dt>対応エリア</dt>
          <dd>熊本県内全域・九州応相談</dd>
        </dl>
      </div>
    </div>
  );
};

export default DetailCompany;
