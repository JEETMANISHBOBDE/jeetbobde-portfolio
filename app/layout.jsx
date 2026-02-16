import './globals.css'
import DarkToggle from '../components/DarkToggle'

export const metadata = {
  title: 'Jeet Manish Bobde',
  description: 'AI/ML Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">

        <div className="fixed top-5 right-5 z-50">
          <DarkToggle />
        </div>

        {children}

      </body>
    </html>
  )
}
