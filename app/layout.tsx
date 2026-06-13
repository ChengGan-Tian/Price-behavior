import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Brooks 价格行为交易 · 学习系统",
  description: "系统化整理 Al Brooks 的价格行为交易体系，从 K 线基础到概率思维",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+SC:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
