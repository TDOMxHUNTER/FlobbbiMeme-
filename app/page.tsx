
'use client'
import dynamic from 'next/dynamic'

const PillNav = dynamic(() => import('./components/PillNav'), {
  ssr: false
})

import Footer from './components/Footer'

export default function Home() {
  const pillNavItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'ROADMAP & TOKENOMICS', href: '/roadmap&tokenomics' },
    { label: 'HOW TO BUY', href: '/howtobuy' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'TEAM EXECUTIVES', href: '/team' }
  ];

  return (
    <main style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      {/* Main centered background image */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/image.ico)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 1,
        opacity: 1.5
      }} />
      
      <PillNav
        items={pillNavItems}
        activeHref="/"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '80px 20px 20px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '4rem',
          textAlign: 'center',
          textShadow: '0 0 20px #000000'
        }}>
          Welcome to FlobbiLand
        </h1>
      </div>

      <Footer />
    </main>
  )
}
