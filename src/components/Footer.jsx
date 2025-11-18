export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold">Elegance Glazing</h4>
          <p className="text-sm text-white/70 mt-2">Premium windows and doors across your local area.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Contact</h5>
          <p className="text-sm text-white/70">Phone: 01234 567890</p>
          <p className="text-sm text-white/70">Email: hello@eleganceglazing.co.uk</p>
          <p className="text-sm text-white/70">Mon–Fri: 9am–6pm</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Follow</h5>
          <div className="flex gap-3 text-sm text-white/70">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div>
          <h5 className="font-medium mb-2">Legal</h5>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Elegance Glazing. All rights reserved.</div>

      {/* WhatsApp floating button */}
      <a href="https://wa.me/441234567890" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5 py-3 font-semibold shadow-xl">WhatsApp Us</a>
    </footer>
  )
}
