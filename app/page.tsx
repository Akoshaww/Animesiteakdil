import Marquee from "@/components/layout/Marquee";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/ui/Search";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  // ❗ ВАЖНО
  const { search } = await searchParams;
  const searchQuery = search || "";

  const url = searchQuery
    ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}&limit=20`
    : `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=20`;

  const res = await fetch(url, { cache: "no-store" });
  const posts = await res.json();

  return (
    <section className="py-8 text-white w-full min-h-screen">
      <Marquee />
      <Search />

      <h2 className="px-4 mb-4 text-xl font-bold">
        {searchQuery
          ? `Результаты поиска: ${searchQuery}`
          : "Популярные аниме"}
      </h2>

      <ul className="gridSolve">
        {posts?.data?.map((post: any) => (
          <li
            key={post.mal_id}
            className="gridObjects group relative w-55 overflow-hidden rounded-2xl bg-zinc-900 shadow-lg hover:opacity-80"
          >
            <Link href={`/anime/${post.mal_id}`}>
              <div className="relative h-80">
                <Image
                  src={post.images.jpg.large_image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 p-3">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-1 flex gap-2 text-sm">
                  <span className="text-yellow-400">⭐ {post.score}</span>
                  <span className="text-zinc-400">{post.year}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {searchQuery && posts?.data?.length === 0 && (
        <p className="text-center text-zinc-500 mt-10">
          По запросу «{searchQuery}» ничего не найдено
        </p>
      )}
    </section>
  );
}

