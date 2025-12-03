import './globals.css'
import Header from '../components/Header'


export const metadata = {
title: 'Jeet Manish Bobde — AI/ML Developer',
description: 'Portfolio of Jeet Manish Bobde — AI/ML Developer and CSE student',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<Header />
<main className="container py-12">{children}</main>
</body>
</html>
)
}