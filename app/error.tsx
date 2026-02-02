'use client'

import { useEffect } from "react";

export default function Error({error, reset}: {error: Error, reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);
  return (
    <div className="flex justify-center flex-col items-center gap-2 ">
      <h1 className="text-white text-3xl flex flex-col gap-8 justify-center items-center h-screen">
        Something went wrong! Please try again later.
        <button className="p-4 bg-red-600 text-white text-2xl rounded-4xl" onClick={reset}>Try again</button>
      </h1>
      
    </div>
  );
}