import Link from 'next/link'
import { ArrowRight, BarChart3, Megaphone, Newspaper, RadioTower, Search, ShieldCheck, Truck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const serviceCards = [
  { icon: Megaphone, title: 'Release distribution', body: 'Package announcements for targeted media, partner, and public update channels.' },
  { icon: RadioTower, title: 'Campaign amplification', body: 'Coordinate message timing, audience fit, and cross-channel visibility.' },
  { icon: Newspaper, title: 'Newswire positioning', body: 'Give editors and readers a clean story with headline, context, and source links.' },
  { icon: BarChart3, title: 'Performance notes', body: 'Keep follow-up reporting, reach signals, and campaign context easy to find.' },
  { icon: ShieldCheck, title: 'Brand consistency', body: 'Align language, imagery, and supporting claims before distribution.' },
  { icon: Truck, title: 'Partner delivery', body: 'Move assets, briefs, and updates from internal teams to external audiences.' },
]

const brandedHeroImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 900">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#66839a"/>
      <stop offset="0.55" stop-color="#1d272d"/>
      <stop offset="1" stop-color="#090a0a"/>
    </linearGradient>
    <linearGradient id="orange" x1="0" x2="1">
      <stop offset="0" stop-color="#ff8a4b"/>
      <stop offset="1" stop-color="#f36d36"/>
    </linearGradient>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0v72" fill="none" stroke="#ffffff" stroke-opacity=".12" stroke-width="1"/>
      <circle cx="0" cy="0" r="3" fill="#ffffff" fill-opacity=".16"/>
    </pattern>
  </defs>
  <rect width="1100" height="900" fill="url(#bg)"/>
  <rect width="1100" height="900" fill="url(#grid)"/>
  <circle cx="880" cy="155" r="220" fill="#ffffff" fill-opacity=".08"/>
  <circle cx="215" cy="720" r="260" fill="#f36d36" fill-opacity=".16"/>
  <path d="M155 640 C320 450 455 520 610 355 S845 150 980 300" fill="none" stroke="#f36d36" stroke-width="18" stroke-linecap="round"/>
  <path d="M170 705 C345 520 500 585 660 430 S870 265 1000 395" fill="none" stroke="#ffffff" stroke-opacity=".38" stroke-width="5" stroke-linecap="round"/>
  <g transform="translate(145 145)">
    <rect width="420" height="265" rx="42" fill="#ffffff" fill-opacity=".95"/>
    <rect x="36" y="42" width="210" height="18" rx="9" fill="#f36d36"/>
    <rect x="36" y="92" width="340" height="18" rx="9" fill="#101820" fill-opacity=".82"/>
    <rect x="36" y="132" width="295" height="14" rx="7" fill="#101820" fill-opacity=".28"/>
    <rect x="36" y="164" width="245" height="14" rx="7" fill="#101820" fill-opacity=".2"/>
    <rect x="36" y="206" width="128" height="36" rx="18" fill="url(#orange)"/>
  </g>
  <g transform="translate(610 250)">
    <rect width="335" height="405" rx="54" fill="#f2f5f7"/>
    <circle cx="168" cy="116" r="68" fill="url(#orange)"/>
    <path d="M168 78v76M130 116h76" stroke="#090a0a" stroke-width="14" stroke-linecap="round"/>
    <rect x="58" y="225" width="220" height="18" rx="9" fill="#101820" fill-opacity=".82"/>
    <rect x="76" y="268" width="184" height="14" rx="7" fill="#101820" fill-opacity=".28"/>
    <rect x="96" y="302" width="144" height="14" rx="7" fill="#101820" fill-opacity=".2"/>
  </g>
  <g fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width="8" stroke-linecap="round">
    <path d="M285 520h150l95-95"/>
    <path d="M405 705h160l100-100"/>
    <path d="M740 690h95l78-78"/>
  </g>
  <g fill="#f36d36">
    <circle cx="285" cy="520" r="16"/>
    <circle cx="530" cy="425" r="16"/>
    <circle cx="405" cy="705" r="16"/>
    <circle cx="665" cy="605" r="16"/>
    <circle cx="913" cy="612" r="16"/>
  </g>
</svg>
`)}`

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextOnlyHomeCard({ post, href, index, wide = false }: { post: SitePost; href: string; index: number; wide?: boolean }) {
  return (
    <Link href={href} className={`group flex min-h-[260px] flex-col justify-between rounded-[2rem] bg-[#f2f5f7] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,17,17,0.12)] ${wide ? '' : dc.layout.minRailCard}`}>
      <div>
        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[.16em] text-[var(--slot4-accent)]">
          <span>{getEditableCategory(post)}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-6 line-clamp-3 text-2xl font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
        <p className="mt-5 line-clamp-4 text-base leading-7 text-black/62">{getEditableExcerpt(post, 170)}</p>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 text-xs font-black text-black/70">Read update <ArrowRight className="h-4 w-4" /></span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name} media distribution.`

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-8 sm:py-12`}>
        <div className="grid overflow-hidden rounded-[2.75rem] bg-[#f4f6f8] shadow-[0_26px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_.9fr]">
          <div className="editable-tech-bg flex min-h-[560px] flex-col justify-center p-7 sm:p-10 lg:p-16">
            <p className="text-sm font-black uppercase tracking-[.16em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">{heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/68">{pagesContent.home.hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label}</Link>
              <Link href="/contact" className={dc.button.secondary}>Plan a release</Link>
            </div>
          </div>
          <Link href={lead ? postHref(primaryTask, lead, primaryRoute) : primaryRoute} className="group relative min-h-[440px] overflow-hidden bg-black">
            <img src={brandedHeroImage} alt={`${SITE_CONFIG.name} media distribution`} className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-6 bottom-6 rounded-[2rem] bg-white/95 p-5 shadow-xl backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Featured distribution</p>
              <h2 className="mt-2 line-clamp-2 text-2xl font-black leading-tight">{lead?.title || pagesContent.home.hero.featureCardTitle}</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="editable-tech-bg bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Our services</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">Discover the range of media distribution services we offer</h2>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <div key={service.title} className="rounded-[2rem] bg-[#f2f5f7] p-8 text-center shadow-sm">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-black"><service.icon className="h-9 w-9" /></span>
              <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-black/62">{service.body}</p>
            </div>
          ))}
        </div>
        <div className={`${dc.layout.rail} mt-14`}>
          {railPosts.map((post, index) => <TextOnlyHomeCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[1] || posts[0]
  if (!feature) return null
  return (
    <section className="bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">To drive campaign visibility and progress in the <span className="orange-underline">media distribution industry</span></h2>
        <div className="mt-10 divide-y divide-white/25 border-y border-white/25">
          {[
            ['10%', 'faster release handoff from brief to publish-ready media package.'],
            ['20%', 'more useful archive discovery through clear categories and campaign context.'],
          ].map(([value, body]) => (
            <div key={value} className="grid gap-5 py-9 sm:grid-cols-[260px_1fr] sm:items-center">
              <p className="text-7xl font-black text-[var(--slot4-accent)]">{value}</p>
              <p className="max-w-3xl text-lg font-semibold leading-8 text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative block min-h-[360px] overflow-hidden">
        <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h3 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl">We're proud to be a useful and valuable partner to distribution teams and communities</h3>
        </div>
      </Link>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 6)
  if (!source.length) return null
  return (
    <section className="editable-tech-bg bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">News and insights</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">Stay up-to-date with the latest <span className="orange-underline">media distribution trends</span></h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {source.map((post, index) => <TextOnlyHomeCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} wide />)}
        </div>
        <form action="/search" className="mx-auto mt-14 flex max-w-3xl items-center rounded-full border border-black/10 bg-white p-2 shadow-sm">
          <Search className="ml-4 h-5 w-5 text-black/35" />
          <input name="q" placeholder={`Search every ${taskLabel(primaryTask).toLowerCase()} update`} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none placeholder:text-black/35" />
          <button className="rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black text-white">Search</button>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-16`}>
        <div className="grid overflow-hidden rounded-[2.75rem] bg-[var(--slot4-blue)] text-white lg:grid-cols-[1.05fr_.95fr]">
          <div className="editable-tech-bg p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[.18em]">Careers and partners</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">Bring every release, campaign, and update into a clearer distribution flow.</h2>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-lg leading-8 text-white/80">Work with a media distribution desk designed for useful public information, organized archive discovery, and confident campaign handoff.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={dc.button.accent}>Contact us</Link>
              <Link href="/signup" className="rounded-full border border-white/60 px-7 py-3.5 text-xs font-black hover:bg-white hover:text-black">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
