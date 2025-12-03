'use client'
import DarkToggle from './DarkToggle'


export default function Header() {
return (
<header className="border-b sticky top-0 bg-white dark:bg-slate-900/60 backdrop-blur-sm z-50">
<div className="container flex items-center justify-between py-4">
<div className="font-bold">Jeet Manish Bobde</div>
<nav className="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#contact" className="hover:underline">Contact</a>
<DarkToggle />
</nav>
</div>
</header>
)
}