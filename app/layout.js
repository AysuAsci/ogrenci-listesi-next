// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: "Öğrenci Bilgi Sistemi",
  description: "Öğrenci bilgilerini gösteren sistem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="body"> {/* ClassName kullanarak global stil uygulayabilirsiniz */}
        {children}
      </body>
    </html>
  );
}