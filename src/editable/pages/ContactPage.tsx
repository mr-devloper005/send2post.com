'use client'

import { FileText, Mail, Megaphone, Phone, RadioTower } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release desk', body: 'Send announcements, corrections, embargo notes, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaign visibility.' },
  { icon: RadioTower, title: 'Campaign support', body: 'Reach the team for asset routing, message updates, and channel planning.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-black">
        <section className="bg-[var(--slot4-blue)] text-white">
          <div className="editable-tech-bg mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.contact.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">{pagesContent.contact.description}</p>
            </div>
            <div className="grid content-center gap-5">
              <div className="rounded-[2rem] bg-white/12 p-6 ring-1 ring-white/15">
                <Phone className="h-8 w-8 text-[var(--slot4-accent)]" />
                <p className="mt-5 text-3xl font-black">(325) 641-8294</p>
                <p className="mt-2 text-sm font-semibold text-white/70">Mon-Fri 9AM-6PM</p>
              </div>
              <div className="rounded-[2rem] bg-white/12 p-6 ring-1 ring-white/15">
                <Mail className="h-8 w-8 text-[var(--slot4-accent)]" />
                <p className="mt-5 text-3xl font-black">sales@example.com</p>
                <p className="mt-2 text-sm font-semibold text-white/70">Distribution and partnership inbox</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-[2rem] bg-[#f2f5f7] p-7">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-black/35">0{index + 1}</span></div>
                <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                <p className="mt-3 text-base leading-7 text-black/62">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
