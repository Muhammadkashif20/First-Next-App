'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Header() {
  const pathname = usePathname()
 
  return (
    <nav className="bg-purple-500 text-white flex justify-around p-3 font-semibold">
      <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/blog' ? 'active underline' : ''}`}
        href="/blog"
      >
        Blogs
      </Link>
      <Link
        className={`link ${pathname === '/contact' ? 'active underline' : ''}`}
        href="/contact"
      >
        ContactUs
      </Link>
      <Link
        className={`link ${pathname === '/dashboard' ? 'active underline' : ''}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </nav>
  )
}