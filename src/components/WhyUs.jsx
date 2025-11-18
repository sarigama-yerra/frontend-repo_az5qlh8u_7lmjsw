export default function WhyUs() {
  const points = [
    'No-pressure quotes, honest pricing',
    'Expert fitters – tidy, courteous, insured',
    'A-rated energy efficiency as standard',
    'Premium hardware, high-security locks',
    'Fast lead times and reliable communication',
  ]
  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why choose Elegance Glazing</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-neutral-700">
          {points.map(p => (
            <li key={p} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
