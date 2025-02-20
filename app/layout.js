import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Choose the weights you need
});

export const metadata = {
  title: "TML - factos",
  description: "TML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
