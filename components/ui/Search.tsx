'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="w-full flex justify-center items-center mb-6">
      <input
        className="w-1/2 p-4 rounded-2xl bg-zinc-800 text-white"
        placeholder="Search for an anime..."
        defaultValue={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}