"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Application route error:", error);
  }, [error]);

  return <main id="main" className="error-page"><p className="eyebrow">SOMETHING WENT WRONG</p><h1>Let&apos;s try that again.</h1><p>The page could not be loaded. You can retry, or return to the homepage.</p><button className="route-action" onClick={() => reset()}>Retry</button></main>;
}
