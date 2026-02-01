
import Marquee from "@/components/layout/Marquee";
import Image from "next/image";

import Link from 'next/link';



export default async function page() {

  const data = await fetch('https://api.jikan.moe/v4/anime?limit=10', { cache: 'no-store' })
  const posts = await data.json()
  console.log(posts);

  return (
    <section className="py-8 text-white w-full h-screen">
      <Marquee />

      <div className="">
        <ul className="gridSolve">
          {posts.data.map((post: any) => (
            <li key={post.mal_id} className="gridObjects">
              <div className=" ">

                <Image
                  src={post.images.jpg.image_url}
                  alt={post.title}
                  width={350}
                  height={400}
                />
                <div className="text">
                  <Link href={`/anime/${post.mal_id}`}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-400">{post.type}</p>
                  <p className="text-sm text-gray-400 ">Score: {post.score}</p>
                  <p className="text-sm text-gray-400">{post.year}</p>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
