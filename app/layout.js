import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Choose the weights you need
});

export const metadata = {
  title: "TML - história",
  description: "TML - esta é a nossa história",
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
