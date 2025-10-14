import { ReactNode } from 'react';
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }){
  return (
    <section id={id} className="container py-24 md:py-32">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">{title}</h2>
      <div className="text-white/85 leading-relaxed text-lg">{children}</div>
    </section>
  )
}
