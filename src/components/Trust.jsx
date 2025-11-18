import { ShieldCheck, Star, BadgeCheck } from 'lucide-react'

export default function Trust() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Trusted local specialists</h2>
            <p className="text-neutral-600">Over 5,000+ windows and doors installed across the region. Fully insured, FENSA-registered installers.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3"><BadgeCheck className="text-emerald-600" /><span className="font-medium">FENSA Registered</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="text-emerald-600" /><span className="font-medium">10-Year Guarantee</span></div>
            <div className="flex items-center gap-3"><Star className="text-emerald-600" /><span className="font-medium">4.9/5 Rated</span></div>
          </div>
          <div className="flex items-center gap-8 opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/FENSA_logo.png" alt="FENSA" className="h-10 object-contain" />
            <img src="https://images.unsplash.com/photo-1632961974688-fae53de3cabc?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0NTc4MzB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Trustpilot" className="h-6 object-contain" />
            <img src="https://images.unsplash.com/photo-1604360360620-a650893fbc68?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaGljaCUzRnxlbnwwfDB8fHwxNzYzNDU3ODMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Which?" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
