/* =======================================
 * 堀造園 サービス一覧
 * URL: src/components/DetailService.tsx
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
import ServiceImage04 from '@/assets/images/service/list04.webp';
import ServiceImage05 from '@/assets/images/service/list05.webp';
import ServiceImage06 from '@/assets/images/service/list06.webp';

import { useMemo } from 'react';
import Link from 'next/link';

const DetailService = () => {
  const ListData = useMemo(
    () => [
      {
        title: '庭木の剪定',
        image01: ServiceImage01,
        description: (
          <>
            庭木1本からOK!お庭や会社の生垣など伸びてしまった木々のお手入れをいたします。
            <br />
            剪定（せんてい）は、木の枝を切り、形を整えたり、風通しを良くするお手入れ方法です。「枝葉が伸びすぎている」「害虫や病気が気になる」「自慢の植木を美しいフォルムに整えたい」など、お困りのことや気になることがあればお気軽にご相談ください。
          </>
        ),
      },
      {
        title: '草刈り',
        image01: ServiceImage02,
        description: (
          <>
            お客様のご要望に合わせて、草刈り、芝刈りをいたします。生い茂ってしまった雑草もお任せください。
            <br />
            「腰が痛くて草刈りがきつい」「暑い時期や寒い時期に外作業をするのが大変」「草刈りをする時間がない」などお困りの際は是非ご利用ください。空き家のご相談も承ります。
          </>
        ),
      },
      {
        title: '伐採・伐根',
        image01: ServiceImage03,
        description: (
          <>
            お庭や会社にある枯れてしまった木や不要になった木の伐採・伐根をいたします。
            <br />
            木は枯れると、乾燥し割れやすくなりますので、強風など何かの拍子に枝が折れて下を通る人や車に激突する恐れがあります。高木であっても熟練の技術で伐採・伐根ができますのでお気軽にご相談ください。
          </>
        ),
      },
      {
        title: '防草シート・砂利敷き・人工芝施工',
        image01: ServiceImage04,
        description: (
          <>
            「庭に生える雑草の処理に困っている」「草むしりをする手間をできるだけ省きたい」とお悩みの方に人気なのが、防草シートと砂利敷き、人工芝施工です。一度施工しておくと、ある程度の期間はメンテナンスをしなくて済みますので草むしりの時間を削減したい人におすすめの方法です。
          </>
        ),
      },
      {
        title: '植栽・販売',
        image01: ServiceImage05,
        description: (
          <>
            お客様のご要望に応じてお庭に樹木の植え付けを行います。環境や目的、お庭の雰囲気などに適した植栽のアドバイスもさせていただきます。
          </>
        ),
      },
      {
        title: 'お庭の年間管理',
        image01: ServiceImage06,
        description: (
          <>
            庭木1本からOK!お庭や会社の生垣など伸びてしまった木々のお手入れをいたします。
            <br />
            剪定（せんてい）は、木の枝を切り、形を整えたり、風通しを良くするお手入れ方法です。「枝葉が伸びすぎている」「害虫や病気が気になる」「自慢の植木を美しいフォルムに整えたい」など、お困りのことや気になることがあればお気軽にご相談ください。
          </>
        ),
      },
      {
        title: '庭木の剪定',
        image01: ServiceImage01,
        description: (
          <>
            年間を通じて剪定や庭木の消毒、草刈りといった庭園管理を行います。
            <br />
            年間で定期管理をご依頼されますと料金を割引させていただきます。また、優先的にご予定を組ませていただきます。
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <div className={`${styles.itemDetail} ${styles.detailService}`}>
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
        <p className={styles.announce}>
          その他にもお庭のことでお困りごとがありましたら、是非ご相談ください。
        </p>
      </div>
      <Link href="/contact/" className={styles.linkContact}>
        無料見積り・ご依頼はこちら
      </Link>
    </div>
  );
};

export default DetailService;
