'use client'

import Link from 'next/link'
import { ArrowRight, Flame } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#e5e7eb] text-black">
      <div className="bg-[var(--slot4-blue)] text-white">
        <div className="editable-tech-bg mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em]">Get in touch</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Discuss a release, campaign, or distribution plan with our media desk.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/80">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            
          </div>
          <div className="grid content-center gap-8 sm:grid-cols-2">
            <Link href="/contact" className="group rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 transition hover:bg-white hover:text-black">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-white"><ArrowRight className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-black">Start a campaign</h3>
              <p className="mt-3 text-sm leading-6 opacity-75">Send publication goals, timing, assets, and target channels.</p>
            </Link>
            <Link href="/search" className="group rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 transition hover:bg-white hover:text-black">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-white"><ArrowRight className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-black">Browse updates</h3>
              <p className="mt-3 text-sm leading-6 opacity-75">Search distributed releases, media stories, and reports.</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-3xl font-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-white"><img src="/favicon.png" alt="Logo" className="h-11 w-11" /></span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-6 max-w-xs text-base leading-7">Media distribution, campaign visibility, and public updates in one focused publication workspace.</p>
          </div>
          <div>
            
            <p className="mt-6 text-sm font-semibold uppercase tracking-[.08em]">Mon-Fri 9AM-6PM</p>
            <div className="mt-5 grid gap-2 text-sm font-bold text-black/65">
              <Link href="/media-distribution">Media Distribution</Link>
              <Link href="/search">Search archive</Link>
            </div>
          </div>
          <div>
            
           
            <div className="mt-5 grid gap-2 text-sm font-bold text-black/65">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              {session ? (
                <>
                  <Link href="/create">Publish</Link>
                  <button onClick={logout} className="text-left">Logout {session.name}</button>
                </>
              ) : (
                <>
                  <Link href="/login">Log in</Link>
                  <Link href="/signup">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-black/10 pt-6 text-center text-xs text-black/50">Copyright (c) {year} {SITE_CONFIG.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
