/* =======================================
 * 堀造園 お仕事Q&A
 * URL: src/components/DetailQuestions.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */
'use client';
import styles from '@/styles/components/Details.module.scss';
import Link from 'next/link';
import { useMemo } from 'react';
import { useState, useRef } from 'react';
const DetailQuestions = () => {
  const listData = useMemo(
    () => [
      {
        title: 'ご相談やお見積もりは無料ですか?',
        answer: (
          <>
            お見積りはご依頼の有無に関らず無料にて承ります。お客様ご自身で十分に検討して頂き、作業内容と価格に納得してからご依頼ください。
          </>
        ),
      },
      {
        title: '庭木一本だけでも相談して良いですか?',
        answer: (
          <>
            もちろん１本からの作業でも大丈夫です。小さなお悩みでもお気軽にご相談ください。
          </>
        ),
      },
      {
        title: '遠方でもご依頼をすることはできますか?',
        answer: (
          <>
            はい、大丈夫です。
            <br />
            主な対応エリアは熊本県内全域ですが、福岡県や佐賀県での施工実績もありますので是非ご相談ください。
          </>
        ),
      },
      {
        title: '庭の管理を継続的にお願いしたいのですが、可能ですか?',
        answer: (
          <>
            はい、可能です。
            <br />
            年間を通しての管理をご依頼いただければ、単発のご依頼に比べて料金が割安ですので、是非ご相談ください。
          </>
        ),
      },
      {
        title: '空き家でもご依頼して良いですか?',
        answer: (
          <>
            はい、大丈夫です。
            <br />
            空き家のお庭管理は年々ご依頼が多くなってきております。年間を通しての管理も可能です。
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>お仕事Q&A</h3>
      <div className={`${styles.itemDetail} ${styles.detailQuestions}`}>
        <ul className={styles.listQuestions}>
          {listData.map((item, index) => (
            <QuestionsItem
              key={index}
              title={item.title}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
      <Link href="/contact/" className={styles.linkContact}>
        無料見積り・ご依頼はこちら
      </Link>
    </div>
  );
};

export default DetailQuestions;

// 子コンポーネント
const QuestionsItem = ({
  title,
  answer,
}: {
  title: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={isOpen ? styles.open : styles.closed}
      >
        <p>{title}</p>
      </button>
      <div
        ref={contentRef}
        className={styles.itemAnswer}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <div>{answer}</div>
      </div>
    </li>
  );
};
