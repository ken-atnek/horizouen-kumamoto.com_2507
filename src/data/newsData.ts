/* =======================================
 * 堀造園 お知らせDATA
 * URL: src/data/newsData.ts
 * Created: 2025-07-12
 * Last updated: 2025-07-12
 * ======================================= */

import type { ReactElement } from 'react';
import { newsBody001 } from './newsBody/newsBody001';

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  content: ReactElement;
};

export const newsData: NewsItem[] = [newsBody001];
