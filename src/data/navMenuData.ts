/* =======================================
 * メニュー項目
 * URL: src/data/navMenuData.ts
 * Created: 2025-07-11
 * Last updated: 2025-07-12
 * ======================================= */

export type NavMenuItem = {
  href: string;
  label: string;
};

export const navMenu: NavMenuItem[] = [
  { href: '/service/', label: 'サービス一覧' },
  { href: '/portfolio/', label: '施工実績' },
  { href: '/news/', label: 'お知らせ' },
  { href: '/contact/', label: '会社概要 / お問合せ' },
];
