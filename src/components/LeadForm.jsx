import { useState } from 'react'

export default function LeadForm({ onClose }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    project_type: '',
    message: '',
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleFiles = (e) => setFiles([...e.target.files])

  const submit = async () => {
    setLoading(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      files.forEach(f => fd.append('files', f))

      const res = await fetch(`${backend}/leads`, { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Failed to submit')
      onClose?.('submitted')
    } catch (e) {
      alert('There was an issue sending your enquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => onClose?.()} />
      <div className="absolute inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[640px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl">
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Get your free quote</h3>
          <button onClick={() => onClose?.()} className="text-neutral-500 hover:text-neutral-900">Close</button>
        </div>
        <div className="p-6 space-y-6">
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-4">
              <input className="border rounded-lg px-3 py-2" name="name" placeholder="Full name" onChange={handleChange} />
              <input className="border rounded-lg px-3 py-2" name="phone" placeholder="Phone number" onChange={handleChange} />
              <input className="border rounded-lg px-3 py-2" name="email" placeholder="Email (optional)" onChange={handleChange} />
              <input className="border rounded-lg px-3 py-2" name="postcode" placeholder="Postcode" onChange={handleChange} />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <select name="project_type" className="w-full border rounded-lg px-3 py-2" onChange={handleChange}>
                <option value="">Project type</option>
                <option>Windows</option>
                <option>Doors</option>
                <option>Bi-folds</option>
                <option>Sliding</option>
                <option>Composite Door</option>
              </select>
              <textarea name="message" rows="4" className="w-full border rounded-lg px-3 py-2" placeholder="Tell us what you need" onChange={handleChange}></textarea>
              <div>
                <label className="block text-sm font-medium mb-2">Upload photos (optional)</label>
                <input type="file" multiple onChange={handleFiles} />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button disabled={step===1} onClick={() => setStep(1)} className="text-sm text-neutral-700">Back</button>
            {step === 1 ? (
              <button onClick={() => setStep(2)} className="rounded-full bg-neutral-900 text-white px-5 py-2 font-medium">Next</button>
            ) : (
              <button disabled={loading} onClick={submit} className="rounded-full bg-neutral-900 text-white px-5 py-2 font-medium disabled:opacity-50">{loading ? 'Sending...' : 'Request quote'}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
