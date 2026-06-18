import Link from 'next/link'
import { CheckCircle2, RadioTower, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-black">
        <section className="editable-tech-bg">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-24">
            <div className="self-center">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.about.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/66">{pagesContent.about.description}</p>
              <Link href="/media-distribution" className="mt-8 inline-flex rounded-full bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-black text-white">Discover more</Link>
            </div>
            <div className="relative min-h-[460px]">
              <img src="/placeholder.svg?height=640&width=760" alt="" className="absolute left-0 top-8 h-72 w-[58%] rounded-[2rem] object-cover shadow-xl" />
              <img src="/placeholder.svg?height=620&width=760" alt="" className="absolute bottom-0 right-0 h-80 w-[64%] rounded-[2rem] object-cover shadow-xl" />
              <div className="absolute right-28 top-0 flex h-28 w-28 rotate-[-12deg] items-center justify-center rounded-full bg-[var(--slot4-accent)] text-center text-[10px] font-black uppercase leading-tight tracking-[.12em] text-black">Shaping media reach</div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--slot4-dark-bg)] text-white">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">To drive clarity and progress in the <span className="orange-underline">media distribution industry</span></h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="border-t border-white/25 pt-7">
                  <p className="text-6xl font-black text-[var(--slot4-accent)]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-black">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: RadioTower, title: 'Distribution planning', body: 'Briefs, assets, categories, and public context are organized before the update goes live.' },
            { icon: ShieldCheck, title: 'Message confidence', body: 'Each page makes the claim, source, and audience path easier to understand.' },
            { icon: CheckCircle2, title: 'Archive value', body: 'Published media updates stay searchable, readable, and reusable after launch day.' },
          ].map(({ icon: TypedIcon, title, body }) => {
            return (
              <div key={title} className="rounded-[2rem] bg-[#f2f5f7] p-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-black"><TypedIcon className="h-7 w-7" /></span>
                <h3 className="mt-7 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-base leading-7 text-black/62">{body}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-[var(--slot4-blue)] text-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-tight">Build a clearer public path for every media update from {SITE_CONFIG.name}.</h2>
            <Link href="/contact" className="w-fit rounded-full bg-[var(--slot4-accent)] px-7 py-3.5 text-sm font-black text-white">Contact us</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
