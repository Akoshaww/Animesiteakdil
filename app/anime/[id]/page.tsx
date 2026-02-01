import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const { data } = await response.json();

  return (
    <div>
      <h1 className="text-white text-2xl font-bold">Anime Detail Page for ID: {id}</h1>
        <div className="">
            <Image src={data.images.jpg.large_image_url} alt="Image of Anime" width={300} height={300} />
        </div>
      
    </div>
  )
}