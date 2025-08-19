'use client'
import dynamic from 'next/dynamic'

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

import Footer from '../components/Footer'

export default function Contact() {
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
        activeHref="/contact"
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
        padding: '100px 20px 40px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '3rem',
            marginBottom: '40px',
            textShadow: '0 0 20px #000000'
          }}>
            Contact Us
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <a
              href="mailto:flobbimeme@gmail.com"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid #00ffff',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#000000',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
            >
               Email
            </a>

            <a
              href="https://x.com/FlobbiMeme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid #00ffff',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#000000',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
            >
               X
            </a>

            <a
              href="https://t.me/FlobbiMeme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid #00ffff',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#000000',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
            >
               Telegram
            </a>

            <a
              href="https://discord.gg/DUvNfJQbQt"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid #00ffff',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#000000',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
            >
               Discord
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        a:hover {
          background: rgba(0, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  )
}
