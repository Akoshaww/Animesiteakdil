

export default async function page() {
    
         const data = await fetch('https://api.jikan.moe/v4/random/anime', { cache: 'no-store' })
         const posts = await data.json()
        return (
            <div className="text-white flex flex-col items-center justify-center gap-8 py-20">
                <h1 className="text-4xl font-bold">Random Anime</h1>
                <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 p-6 rounded-2xl shadow-lg">
                    <img src={posts.data.images.jpg.large_image_url} alt={posts.data.title} className="rounded-2xl w-48 md:w-64" />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">{posts.data.title}</h2>
                            <p className="text-lg">{posts.data.synopsis || "No synopsis available"}</p>
                        </div>
                        <a href={`/anime/${posts.data.mal_id}`} className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Watch Now
                        </a>
                    </div>
                </div>
                <h2 className="text-2xl font-bold underline">Enjoy anime!</h2>
            </div> 
            
        )

}