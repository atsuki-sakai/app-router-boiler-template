import React from "react";
import Script from "next/script";

const GA4Script = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
  return (
    <>
      {GA_TRACKING_ID !== "" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </>
      )}
    </>
  );
};

export default React.memo(GA4Script);
