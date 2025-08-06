"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsentBanner from "./CookieConsentBanner";

const ConsentManager = () => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "true") {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setConsentGiven(true);
  };

  if (consentGiven === null) {
    return null;
  }
  return (
    <>
      {!consentGiven && <CookieConsentBanner onAccept={handleAccept} />}

      {consentGiven && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      )}
    </>
  );
};
export default ConsentManager;
