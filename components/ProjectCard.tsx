import { ReactNode } from 'react';
export default function ProjectCard({ title, subtitle, children, href }: { title:string; subtitle?:string; children:ReactNode; href?:string }){
  return (
    <a href={href ?? '#'} className="block rounded-xl border border-white/10 p-6 md:p-8 hover:bg-white/5 transition shadow-soft">
      {subtitle && <div className="text-xs uppercase tracking-wider text-white/50 mb-2">{subtitle}</div>}
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="text-white/80">{children}</div>
    </a>
  )
}
