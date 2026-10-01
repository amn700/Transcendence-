import { useEffect, useState } from 'react'
function App() {
  const [result, setResult] = useState('checking...')
  useEffect(() => { fetch('/api/health').then((response) => response.json()).then((data: { status: string }) => setResult(data.status)).catch(() => setResult('unavailable')) }, [])
  return <main className="grid min-h-screen place-items-center bg-slate-950 p-6 text-slate-100"><section className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Skill Swap</p><h1 className="mt-3 text-3xl font-bold">Walking skeleton</h1><p className="mt-4 text-slate-300">Backend health: {result}</p></section></main>
}
export default App
