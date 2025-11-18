import { useState } from 'react'

const items = [
  {
    before: 'https://images.unsplash.com/photo-1508491415560-3c8b0fdc4b65?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    caption: 'Victorian terrace – energy A-rated sash replacements'
  },
  {
    before: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f3?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1560448075-bb4bfc2b83d0?q=80&w=1600&auto=format&fit=crop',
    caption: 'Open-plan extension with slimline aluminium bi-folds'
  },
  {
    before: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    caption: 'Composite front door upgrade – secure and stylish'
  }
]

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const i = items[index]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Before & After</h2>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button key={idx} onClick={() => setIndex(idx)} className={`h-2 w-6 rounded-full ${idx === index ? 'bg-neutral-900' : 'bg-neutral-200'}`}></button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl"><img src={i.before} alt="Before" className="w-full h-full object-cover" /></div>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl"><img src={i.after} alt="After" className="w-full h-full object-cover" /></div>
        </div>
        <p className="mt-4 text-neutral-600">{i.caption}</p>
      </div>
    </section>
  )
}
