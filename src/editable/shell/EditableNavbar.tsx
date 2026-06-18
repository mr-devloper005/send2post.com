'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flame, LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-white/95 text-black shadow-[0_1px_0_rgba(8,9,11,.08)] backdrop-blur">
      <div className="mx-auto grid min-h-[86px] max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-2 text-2xl font-black">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-white">
              <img src="/favicon.png" alt="Logo" className="h-9 w-9" />
            </span>
            <span className="truncate">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 text-sm font-black lg:flex">
          <Link href="/">Home</Link>
          <Link href="/media-distribution">Distribution</Link>
          
          <Link href="/search">Search</Link>
          
        </nav>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>
              
              <span className="hidden max-w-[150px] items-center gap-2 truncate text-sm font-black sm:inline-flex"><UserRound className="h-4 w-4 text-[var(--slot4-accent)]" /> {session.name}</span>
              <button type="button" onClick={logout} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
            </>
          ) : <Link href="/login" className="hidden text-sm font-black sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-accent)] px-4 py-3 text-xs font-black text-white sm:px-6">
            {session ? 'Publish' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="bg-[var(--slot4-dark-bg)] text-white">
        <div className="mx-auto flex min-h-[52px] max-w-[1280px] items-center gap-5 px-4 sm:px-6 lg:px-8">
          <p className="hidden text-[10px] font-black uppercase tracking-[.2em] text-white/50 md:block">Distribution desk</p>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center rounded-full border border-white/15 bg-white/10 lg:max-w-[340px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Media Distribution', href: '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Signed in as ${session.name}`, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-[var(--slot4-gray)] px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
