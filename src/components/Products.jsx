import { Window, DoorOpen, PanelsTopLeft, PanelsTopRight } from 'lucide-react'

const products = [
  {
    title: 'Double Glazing Windows',
    icon: Window,
    bullets: ['Energy A-rated glass', 'Secure multi-point locking', 'Made-to-measure'],
  },
  {
    title: 'uPVC Windows',
    icon: PanelsTopLeft,
    bullets: ['Low maintenance', 'Excellent insulation', 'Great value'],
  },
  {
    title: 'Aluminium Windows',
    icon: PanelsTopRight,
    bullets: ['Slim sightlines', 'Contemporary look', 'Durable powder-coat'],
  },
  {
    title: 'Bi-fold Doors',
    icon: DoorOpen,
    bullets: ['Seamless indoor-outdoor', 'Smooth glide', 'High security'],
  },
  {
    title: 'Sliding Doors',
    icon: DoorOpen,
    bullets: ['Panoramic views', 'Thermally efficient', 'Quiet operation'],
  },
  {
    title: 'Composite Doors',
    icon: DoorOpen,
    bullets: ['Solid timber core', 'Outstanding security', 'Stunning designs'],
  },
]

export default function Products({ onCta }) {
  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Products & Services</h2>
          <button onClick={onCta} className="hidden md:inline-flex rounded-full bg-neutral-900 text-white px-5 py-2 font-medium hover:bg-neutral-800">Get a Free Quote</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ title, icon: Icon, bullets }) => (
            <div key={title} className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-900 text-white flex items-center justify-center"><Icon size={20} /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-neutral-600">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />{b}</li>
                ))}
              </ul>
              <button onClick={onCta} className="mt-6 text-sm font-semibold text-neutral-900 hover:opacity-80">Get a price →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
