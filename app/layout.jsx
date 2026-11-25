import './globals.css'
import Header from '../components/Header'
import MotionEffects from '../components/MotionEffects'

const description = 'Portfolio of Jeet Manish Bobde, a software developer and computer science student working in applied AI, machine learning, and backend engineering.'
const themeScript = "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch{}"

export const metadata = {
  title: 'Jeet Manish Bobde | Software Developer & Applied AI',
  description,
  openGraph: {
    title: 'Jeet Manish Bobde | Software Developer & Applied AI',
    description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <Header />
        {children}
        <MotionEffects />
      </body>
    </html>
  )
}
