
  const EXTERNAL_DATA_URL = "https://proghostwritingservices.com";
  export default async function sitemap() {
    // const content = contentData.map((content) => ({
    //   url: `${EXTERNAL_DATA_URL}/${content.slug}`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.90
    // }));
    const homeRoute = [""].map((route) => ({
      url: `${EXTERNAL_DATA_URL}${route}`,
      lastModified: new Date().toISOString(),
      priority: 1.00
    }));
    
    const otherRoutes = [ "/about","/contact-us"].map((route) => ({
      url: `${EXTERNAL_DATA_URL}${route}`,
      lastModified: new Date().toISOString(),
      priority: 0.70
    }));
  
    return [
      ...homeRoute,
      ...otherRoutes,
    //   ...content,
    ];
  }
  