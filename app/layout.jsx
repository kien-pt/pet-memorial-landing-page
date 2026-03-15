import { Cormorant_Garamond, Manrope } from "next/font/google";

export const metadata = {
  title: "An Nhien Pet Memorial",
  description:
    "Landing page giao dien dep, hien dai va trang nha cho website dich vu tang le thu cung."
};

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  weight: ["500", "600", "700"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${manrope.variable} ${cormorantGaramond.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');"
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
