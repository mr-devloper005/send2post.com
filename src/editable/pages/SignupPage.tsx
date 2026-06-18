import type { Metadata } from 'next'
import Link from 'next/link'
import { Megaphone, PenLine, UserPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="editable-tech-bg bg-white px-4 py-14 text-black sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[2.75rem] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.1)] lg:grid-cols-[.95fr_1.05fr]">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <UserPlus className="h-9 w-9 text-[var(--slot4-accent)]" />
            <p className="mt-6 text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-6 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/70">{pagesContent.auth.signup.description}</p>
            <div className="mt-10 grid gap-4">
              <div className="rounded-[1.7rem] bg-white/10 p-5 ring-1 ring-white/15"><PenLine className="h-6 w-6 text-[var(--slot4-accent)]" /><p className="mt-3 font-black">Draft releases, image posts, and distribution notes.</p></div>
              <div className="rounded-[1.7rem] bg-white/10 p-5 ring-1 ring-white/15"><Megaphone className="h-6 w-6 text-[var(--slot4-accent)]" /><p className="mt-3 font-black">Move updates toward campaign-ready publication.</p></div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
