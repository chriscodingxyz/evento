"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      {/* <H1 className="mb-5">Something went wrong!</H1> */}
      {showError ? <H1>{error.message}</H1> : <H1>Something went wrong</H1>}
      <div className="mt-5 flex justify-around">
        <button
          className="border border-white px-3 py-1 rounded"
          onClick={() => setShowError((curr) => !curr)}
        >
          {showError ? "Hide error" : "Show error"}
        </button>
        <button
          className="border border-white px-3 py-1 rounded"
          onClick={
            // Attempt to recover by trying to re-render the segment
            reset
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
