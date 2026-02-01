
import Marquee from "@/components/layout/Marquee";
import Image from "next/image";

import Link from 'next/link';



export default async function page() {

  try {
    const data = await fetch('https://api.jikan.moe/v4/anime?limit=10', { cache: 'no-store' })
    const posts = await data.json()
    console.log(posts);
    
    return (
      <section className="py-8 text-white w-full h-screen">
        <Marquee />

        <div className="">
          <ul className="gridSolve">
            {posts.data.map((post: any) => (
              <li key={post.mal_id} className="gridObjects group relative w-55 overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition hover:opacity-80">


                {/* Poster */}
                <Link href={`/anime/${post.mal_id}`}>
                  <div className="relative h-80">
                    <Image
                      src={post.images.jpg.large_image_url}
                      alt={post.title}

                      fill
                      className="object-cover"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 p-3">
                    <h3 className="text-sm font-semibold text-white line-clamp-2">
                      {post.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-yellow-400 text-sm">⭐ {post.score}</span>
                      <span className="text-xs text-zinc-400">{post.year}</span>
                    </div>
                  </div>
                </Link>



              </li>
            ))}
          </ul>
        </div>

      </section>
    );
  }

  catch (error) {
    console.log("Failed to fetch data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-white text-2xl">Failed to load data. Please try again later.</h1>
      </div>
    );
  }


}
