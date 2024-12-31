import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkToMessenger from "@/components/Tawkto";
import Whatsapp from "@/components/Whatsapp";


export const metadata = {
  title: " Pro Ghostwriting Services For Ebooks, SEO Content And Blogs ",
  description:
    "Searching for ghostwriters to create your books, speeches, memoirs and articles? Hire our pro ghostwriting services and get content written at low prices.",
  alternates: {
    canonical: "https://proghostwritingservices.com",
    last_updated: "10/15/2024",
  },
  openGraph: {
    title: "Pro Ghostwriting Services For Ebooks, SEO Content And Blogs",
    description:
      "Searching for ghostwriters to create your books, speeches, memoirs and articles? Hire our pro ghostwriting services and get content written at low prices.",
    images: [
      {
        url: "https://proghostwritingservices.com/_next/image?url=%2Flogo-black.png&w=256&q=75",
        width: 1300,
        height: 628,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://proghostwritingservices.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Ghost Writing Services",
    description:
       "Searching for ghostwriters to create your books, speeches, memoirs and articles? Hire our pro ghostwriting services and get content written at low prices",
    creator: "@Proghost_writer",
    site: "x.com/Proghost_writer",
    images: [""],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen relative  md:overflow-visible">
          <Navbar />
          {children}
          <Footer />
          <TawkToMessenger />
          <Whatsapp />
        </div>
      </body>
    </html>
  );
}
