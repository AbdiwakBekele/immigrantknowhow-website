'use client';

import Script from 'next/script';

export default function GTranslateWidget() {
  return (
    <>
      <div className="gtranslate_wrapper" />

      <Script id="gtranslate-settings" strategy="afterInteractive">
        {`
          window.gtranslateSettings = {
            default_language: "en",
            native_language_names: true,
            languages: ["en","fr","it","es","af","zh-CN","nl","de","ko","pt","ru","sv"],
            wrapper_selector: ".gtranslate_wrapper",
            switcher_horizontal_position: "right",
            alt_flags: {
              en: "usa",
              pt: "brazil",
              es: "mexico"
            }
          };
        `}
      </Script>

      <Script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
    </>
  );
}