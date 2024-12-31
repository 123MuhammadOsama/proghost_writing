import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Affordable Ghostwriting Services - Contact Us",
  description:
    "Need more information about ghostwriting services? Contact us at +1 206-746-7149 regarding any queries & complaints. Check out our complete website for further assistance!",
    openGraph: {
      title: "About - Pro Ghostwriting Services",
      description: "Pro ghostwriting services focus on delivering high-quality ghostwriting services. Read more about us by clicking this page",
      images: [
        {
          // url: "https://proghostwritingservices.com/logo",
          url:"https://proghostwritingservices.com/_next/image?url=%2Fabout-us-hero.png&w=640&q=75",
          width: 1200,
          height: 628,
          type: 'image/jpeg',
        }
      ],
      siteName: "Pro GhostWriters",
      locale: 'en_US',
      type: 'article',
      url: 'https://proghostwritingservices.com/contactus',
    },
    alternates: {
      canonical: 'https://proghostwritingservices.com/contactus',
      last_updated: '10/15/2024'
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

function ContactusPage() {
  return (
    <div className="overflow-scroll">
      <ContactUs />
    </div>
  );
}

export default ContactusPage;
