// components/Marquee.jsx
export default function Marquee() {
    const text = ' Welcome to Ascendo Anime |'
  return (
    <div className="overflow-hidden whitespace-nowrap mt-8">
      <div className="inline-block animate-marquee">
        <span className="sm:text-6xl text-3xl font-extrabold mr-10">{text.repeat(10)}</span>
        <span className="sm:text-6xl text-3xl font-extrabold mr-10">{text.repeat(10)}</span>
      </div>

      <h3 className="text-center py-4 sm:text-2xl font-bold">Пока нельзя ничего посмотреть!</h3>
    </div>
  )
}