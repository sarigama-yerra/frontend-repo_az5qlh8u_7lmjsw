import { motion } from 'framer-motion'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
        <img
          src="https://images.unsplash.com/photo-1575517111478-7f6d1e27a858?q=80&w=2000&auto=format&fit=crop"
          alt="Modern home with elegant glazing"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="inline-block rounded-full border border-white/15 px-4 py-1 text-sm text-white/80 backdrop-blur">Premium Windows & Doors • Fast, Professional Install</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Elevate your home with precision-made glazing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            High-quality double glazing, aluminium and composite doors, installed by experts. Transparent pricing. Zero hassle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 font-semibold hover:bg-neutral-200 transition">Get Free Quote</button>
            <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition">View Our Work</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
