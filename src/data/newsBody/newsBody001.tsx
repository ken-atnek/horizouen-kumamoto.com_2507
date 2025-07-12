/* =======================================
 * ニュース記事001
 * URL: src/data/newsBody/newsBody001.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import Image from 'next/image';

export const newsBody001 = {
  id: '1',
  date: '2024-02-14',
  title: 'ホームページを公開しました。',
  content: (
    <>
      <div>
        <Image
          src="/images/news/001/top.s2-1.webp"
          alt="サムネール"
          width={800}
          height={500}
        />
      </div>
      <p>
        この度、堀造園では公式ホームページを公開しました。
        <br />
        今後はホームページを通じ、様々な情報を発信してまいりますのでどうぞよろしくお願いいたします。
      </p>
    </>
  ),
};
