import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Products from './components/Products'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const galleryRef = useRef(null)
  const [open, setOpen] = useState(false)

  const scrollToWork = () => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white text-neutral-900">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Elegance Glazing</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#products" className="hover:text-neutral-900">Products</a>
            <a href="#gallery" className="hover:text-neutral-900">Our Work</a>
            <a href="#why" className="hover:text-neutral-900">Why Us</a>
          </div>
          <button onClick={() => setOpen(true)} className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-medium">Get Free Quote</button>
        </div>
      </header>

      <main>
        <Hero onPrimaryClick={() => setOpen(true)} onSecondaryClick={scrollToWork} />
        <Trust />
        <div id="products"><Products onCta={() => setOpen(true)} /></div>
        <div id="gallery" ref={galleryRef}><Gallery /></div>
        <div id="why"><WhyUs /></div>

        {/* Service Area Map (simple embed for now) */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Service Areas</h2>
              <button onClick={() => setOpen(true)} className="hidden md:inline-flex rounded-full bg-neutral-900 text-white px-5 py-2 font-medium">Get a Free Quote</button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200">
              <iframe title="Service Area Map" src="https://www.google.com/maps/d/embed?mid=1e9wZ1_fauxMapId" className="w-full h-[420px]" loading="lazy"></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What customers say</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl border border-neutral-200 p-6">
                  <div className="text-amber-500">★★★★★</div>
                  <p className="mt-3 text-neutral-700">Professional, tidy and the new windows look fantastic. Would highly recommend!</p>
                  <p className="mt-4 text-sm text-neutral-500">Sarah • Guildford</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Sticky CTA */}
      <button onClick={() => setOpen(true)} className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 z-40 rounded-full bg-neutral-900 text-white px-6 py-3 font-semibold shadow-xl">Get a Free Quote</button>

      {open && <LeadForm onClose={() => setOpen(false)} />}
    </div>
  )
}

export default App
