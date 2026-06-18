import type { Metadata } from 'next'
import Link from 'next/link'
import { LockKeyhole, RadioTower, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="editable-tech-bg bg-white px-4 py-14 text-black sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[2.75rem] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.1)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="bg-[var(--slot4-blue)] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[.18em]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/78">{pagesContent.auth.login.description}</p>
            <div className="mt-10 grid gap-4">
              <div className="rounded-[1.7rem] bg-white/12 p-5 ring-1 ring-white/15"><RadioTower className="h-6 w-6 text-[var(--slot4-accent)]" /><p className="mt-3 font-black">Access campaign drafts and distribution notes.</p></div>
              <div className="rounded-[1.7rem] bg-white/12 p-5 ring-1 ring-white/15"><ShieldCheck className="h-6 w-6 text-[var(--slot4-accent)]" /><p className="mt-3 font-black">Keep publishing actions tied to your account.</p></div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <LockKeyhole className="h-9 w-9 text-[var(--slot4-accent)]" />
            <p className="mt-6 text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-6 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
