import React from 'react'
import { Header } from '../../../widgets/Header'
import { Footer } from '../../../widgets/Footer'

interface Props {
    children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
