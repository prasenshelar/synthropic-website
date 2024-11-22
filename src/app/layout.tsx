import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Synthropic - Redefining Threat Detection",
  description:
    "Synthropic is pioneering adaptive, cutting-edge systems for threat detection and response.",
  openGraph: {
    title: "Synthropic",
    description:
      "Evolving the landscape of threat detection and response through adaptive systems.",
    url: "https://synthropic.com",
    siteName: "Synthropic",
    images: [
      {
        url: "/thumbnail.png", // Add your custom thumbnail here
        width: 1200,
        height: 630,
        alt: "Synthropic",
      },
    ],
    type: "website",
  },
  icons: {
  icon: "/favicon.ico",
  apple: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synthropic - Redefining Threat Detection",
    description:
      "Synthropic is pioneering adaptive, cutting-edge systems for threat detection and response.",
    images: ["/thumbnail.png"], // Same as Open Graph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}