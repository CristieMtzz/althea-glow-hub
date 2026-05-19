import { ReactNode } from "react";

export function Section({
  id, eyebrow, title, intro, children, className = "",
}: {
  id: string; eyebrow?: string; title: string; intro?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`px-4 ${className}`}>
      <div className="mx-auto max-w-7xl glass shadow-althea rounded-[2.5rem] p-6 md:p-12">
        {eyebrow && (
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            {eyebrow}
          </span>
        )}
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance max-w-3xl">{title}</h2>
          {intro && <p className="text-muted-foreground max-w-xl leading-relaxed">{intro}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
