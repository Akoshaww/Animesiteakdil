import Image from "next/image";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const post = await response.json();

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-8 p-8 mb-10">
                <div className="flex gap-4 flex-col ">
                    <Image
                        src={post.data.images.jpg.large_image_url}
                        alt={post.data.title}
                        width={220}
                        height={320}
                        className="rounded-2xl"
                    />
                    <div className="flex gap-2 ">
                        <span className="text-yellow-400 text-sm"><p className="text-white font-bold ">Ratings:</p> ⭐ {post.data.score}</span>
                        <span className="text-xs text-zinc-400"><p className="text-white font-bold ">Дата выхода:</p>{post.data.year}</span>
                        <span className="text-xs text-zinc-400"><p className="text-white font-bold ">Количество эпизодов:</p>{post.data.episodes}</span>
                        <span className="text-xs text-zinc-400"><p className="text-white font-bold ">Статус:</p>{post.data.status}</span>
                    </div>
                    <div className="flex flex-col lg:w-2/3">
                    <div>
                        <h2 className="text-white text-xl font-bold my-1">Жанры</h2>
                        <ul className="flex gap-4 flex-wrap">
                            {post.data.genres.map((genre: any) => (
                                <li key={genre.mal_id} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                    {genre.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-bold my-1">Студии</h2>
                        <ul className="flex gap-4 flex-wrap">
                            {post.data.studios.map((studio: any) => (
                                <li key={studio.mal_id} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                    {studio.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-bold my-1">Тэги</h2>
                        <ul className="flex gap-4 flex-wrap">
                            {post.data.themes.map((theme: any) => (
                                <li key={theme.mal_id} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                    {theme.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-bold my-1">Источник</h2>
                        <ul className="flex gap-4 w-fit flex-wrap bg-zinc-800 px-3 py-1 rounded-full text-sm">
                            {post.data.source}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-bold my-1">Рейтинг</h2>
                        <ul className="flex gap-4 w-fit flex-wrap bg-zinc-800 px-3 py-1 rounded-full text-sm">
                            {post.data.rating}
                        </ul>
                    </div>
                </div>
                </div>
                
                <div>
                    <h1 className="text-white text-2xl font-bold my-1">{post.data.type}: {post.data.title}</h1>
                    <details className="text-white my-2">
                        <summary>Описание</summary>
                        <p className="text-white my-2">{post.data.synopsis}</p>
                    </details>

                </div>


            </div>
        </div>
    )
}