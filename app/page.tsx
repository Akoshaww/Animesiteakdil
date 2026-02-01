
import Marquee from "@/components/layout/Marquee";
import Image from "next/image";

import Link from 'next/link';



export default async function page() {

  let data = await fetch('https://api.jikan.moe/v4/anime?limit=10', { cache: 'no-store' })
  let posts = await data.json()
  console.log(posts);

  return (
    <section className="py-8 text-white w-full h-screen">
      <Marquee />

      <div className="">
        <ul className="grid grid-cols-4">
          {posts.data.map((post: any) => (
            <li key={post.mal_id} className="mb-4 px-2 py-2">
              <div className="w-[100px] h-[200px] ">

                <Image
                  src={post.images.jpg.image_url}
                  alt={post.title}
                  width={100}
                  height={150}
                />
                <div>

                  <div>
                    <Link href={`/anime/${post.mal_id}`}>
                      <h2 className="text-xl font-bold w-[100px] text-wrap">{post.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-400 w-[100px] text-wrap">Score: {post.score}</p>
                  </div>
                  
                </div>

              </div>

            </li>
          ))}
        </ul>
      </div>
          
    </section>
  );
}
